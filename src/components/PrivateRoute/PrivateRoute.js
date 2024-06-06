import { useSelector } from "react-redux"
import { selectAuthToken } from "../../features/user/userSlice"
import { Route, Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const token = useSelector(selectAuthToken);

    return token ? children : <Navigate to="/user/login" />;
};

export default PrivateRoute;
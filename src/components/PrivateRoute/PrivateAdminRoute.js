// import { useSelector } from "react-redux"
// import { selectAuthToken, selectCurrentUser } from "../../features/user/userSlice"
// import { Route, Navigate, Outlet } from "react-router-dom";


// const AdminRoute = ({ element, ...rest }) => {
//     const user = useSelector(selectCurrentUser);

//     if (!user || !user.isAdmin) {
//         return <Navigate to="/user/login" />;
//     }
//     return element;
// };

// export default AdminRoute;
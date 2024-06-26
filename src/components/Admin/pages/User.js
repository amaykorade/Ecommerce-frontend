import React, { useEffect, useState } from "react";
import "./User.css";
import Header from "../adminComponents/Header.js";
// import { download } from "../assets/index.jsx";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import Sidebar from "../adminComponents/Sidebar.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getAllUsers, selectAllUsers, selectAuthError } from "../../../features/user/userSlice.js";


const Users = () => {

  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const data = useSelector(selectAllUsers) || { users: [] };
  const users = data.users || [];
  // console.log(users.users);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  const handleDeleteUser = async (userId) => {
    try {
      await dispatch(deleteUsers(userId)).unwrap();
      window.alert('User deleted successfully');
      dispatch(getAllUsers());
      setSelectedUser(null);
    } catch (error) {
      window.alert('Failed to delete user');
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filterUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="user-page-section">
      <Sidebar />
      <div className="user-admin-page-div" >
        <Header title="ADMIN PANEL" pagename="USERS" />
        <div className="search-container">
          <form>
            <input type="text" placeholder="search" value={searchQuery} onChange={handleSearchChange} />
          </form>
        </div>
        {error && <div className="error-message">{error}</div>}
        <section className="User-container">
          <div className="User-lists">
            {
              filterUsers.map((user) => (
                <div className="user-name" key={user._id} onClick={() => handleUserClick(user)}>
                  <div className="user-details-card">
                    <FaUserAlt className="user-contact-i" />
                    <span className="content">
                      {user.name} <h5>{user._id}</h5>
                    </span>
                  </div>
                  <section>
                    <BiSolidRightArrow className="user-arrow" />
                  </section>
                </div>

              ))
            }

          </div>

          {selectedUser && (
            <div className="user-details">
              {/* <img src={download} alt="" /> */}
              <section className="user-info">
                <span className="user-info2">
                  <div className="btw-space">
                    Name
                    <br />
                  </div>
                  <div className="btw-space">
                    User ID
                    <br />
                  </div>
                  <div className="btw-space">
                    Email
                    <br />
                  </div>
                  <div className="btw-space">Mobile Number</div>{" "}
                  <div className="btw-space">
                    Address
                    <br />{" "}
                  </div>
                  <div className="btw-space">
                    Country
                    <br />{" "}
                  </div>
                  <div className="btw-space">
                    State
                    <br />{" "}
                  </div>
                  <div className="btw-space">
                    City
                    <br />{" "}
                  </div>
                  <div className="btw-space">
                    Pincode
                    <br />{" "}
                  </div>
                </span>

                <span className="user-detailing">
                  <div className="btw-space">
                    : {selectedUser.name}
                    <br />
                  </div>
                  <div className="btw-space">
                    : {selectedUser._id}
                    <br />
                  </div>
                  <div className="btw-space">
                    : {selectedUser.email}
                    <br />
                  </div>
                  <div className="btw-space">: {selectedUser.number} </div>
                  <div className="btw-space">
                    : {selectedUser.address}
                    <br />
                  </div>
                  <div className="btw-space">
                    : {selectedUser.country}
                    <br />
                  </div>
                  <div className="btw-space">
                    : {selectedUser.state}
                    <br />
                  </div>
                  <div className="btw-space">
                    : {selectedUser.city}
                    <br />
                  </div>
                  <div className="btw-space">
                    : {selectedUser.pincode}
                    <br />
                  </div>
                </span>
              </section>
              <br />
              <button className="delete-btn" onClick={() => handleDeleteUser(selectedUser._id)} >Delete User</button>
            </div>
          )}

        </section>
      </div>
    </div>
  );
};

export default Users;
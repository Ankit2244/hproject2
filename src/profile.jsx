import React from "react";
import "./Profile.css"; // I'll also give you CSS after this

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/120"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">Ankit Sharma</h2>
        <p className="profile-email">ankit@example.com</p>
        <div className="profile-options">
          <button>Edit Profile</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

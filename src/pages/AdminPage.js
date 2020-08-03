import React from "react";
import "./AdminPageStyles.scss";
import CustomButton from "../Forms/CustomButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const AdminPage = ({ user }) => {
  return (
    <div className="admin-container">
      <div className="admin-details-container">
        <h1> Admin </h1>
        <h4>Name: {user.displayName}</h4>
        <h4>Email: {user.email}</h4>
        <Link to="/CreateReport">
          <CustomButton>Create Report</CustomButton>
        </Link>

        <Link to="/DeleteReport">
          <CustomButton>Delete Report</CustomButton>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseS.auth,
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(AdminPage);

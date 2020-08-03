import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteReport } from "../Store/Actions/adminAction";
import { Link, Redirect } from "react-router-dom";
import './DeleteReportStyles.scss';

class DeleteReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bin: false,
    };
  }

  handleClick = (e, report) => {
    e.preventDefault();
    this.props.newDeleteReport(report);
    this.setState({
      bin: true,
    });
  };

  render() {
    const { reportInfo, user } = this.props;

    let filterReport =
      reportInfo &&
      reportInfo.filter(function (item) {
        return item.Writter.includes(user);
      });

    if (this.state.bin) {
      return <Redirect to="./" />;
    } else {
      return (
        <div className="delete-report-container">

        <h2>Admin</h2>
        <p>View || Delete</p>


          {filterReport &&
            filterReport.map((report) => {
              return (
                <div className="report-slim-container" key={report.id}>
                  
                  <div className="report-check">
                    <div>{report.title}</div>
                    <p>{report.reportOutline}</p>
                  </div>

                  <div className="delete-button-container">
                    <Link
                      to={"/article/" + report.id}
                      className="summary"
                      key={report.id}
                    >
                    <img src="./eye.png" alt="view"/>
                  
                  
                    </Link>

                    <img src="./bin.png" alt="delete" onClick={(e) => this.handleClick(e, report.id)}/>
        
                    
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseS.auth,
    reportInfo: state.firestore.ordered.articles,
    user: state.user.currentUser.displayName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newDeleteReport: (report) => dispatch(deleteReport(report)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteReport);

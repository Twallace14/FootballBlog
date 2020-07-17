import React, { Component } from 'react';
import ReportList from '../Reports/ReportList';
import { connect, } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './dashboardStyles.scss'



class Dashboard extends Component {

    render() {
        const { reportInfo } = this.props;
        return (
            <div className='dashboard'>
                <div className='reportlist-container'>
                <h1> Latest Reports </h1>
                    <ReportList reports={reportInfo} />
                </div>
                <div className="add-space">
                    <h1> addspace</h1>
                </div>

            </div>

        )

    }
};

const mapStateToProps = (state) => {
    return {
        reportInfo: state.firestore.ordered.articles
    }
}




export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'articles', limit: 5, orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard);
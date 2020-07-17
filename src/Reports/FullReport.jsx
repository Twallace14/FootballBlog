import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './FullReportStyles.scss';





function FullReport(props) {



    const { report, id} = props;
    





    if (report) {
        let fullData = report.report;
        let Dataray = fullData.split('/');

     



        const head = 'share it';
    const url = `http://rabonareport.com/article/${id}`


        return (
            <div className='fullreport'>
                <div className="category-Header">
                    <img className="header-image" src={`/headerimages/${report.category}.png`} alt='category-visual'
                    />



                </div>


                <h1 className='title'> {report.title}</h1>


                <div className='article-container'>

                    {Dataray && Dataray.map(report => {
                        return (
                            <p className='report-data'>{report}</p>
                        )
                    })}


                </div>





            </div>
        )
    } else {
        return (
            <div className="loading-file">

                <h2>Loading File ....</h2>

                <span><h6>please refresh if not redirected in 10s</h6></span>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const reports = state.firestore.data.articles;
    const report = reports ? reports[id] : null

    return {
        report: report,
        id: id
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'articles'
    }])
)(FullReport);



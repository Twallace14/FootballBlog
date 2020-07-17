import React from 'react'
import ReportCard from './ReportCard'
import './ReportListStyles.scss'
import { Link } from 'react-router-dom'

const ReportList = ({ reports,}) => {
    return (
        <div className="ReportList">
        

            {reports && reports.map(report => {
                return (
                    <Link to ={'/article/' + report.id} className='summary' key={report.id}>
                   
                        <ReportCard  report={report} key={report.id} />

                    </Link>)
            })}
        </div>
    );
}

export default ReportList;
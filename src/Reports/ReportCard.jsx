import React from 'react'
import trophy from '../assets/images/trophyLift.png'
import './ReportCardStyles.scss'
import moment from 'moment'

const ReportCard = ({ report }) =>
    (
        <div className='card'>
            <div className="img-container">
                <div className="canvas">
                    <img src={trophy} alt='trophy'/>
                </div>
                <div className='card-info'>
                    <span className='date'>{moment(report.createdAt.toDate()).format('LL')}</span>
                    <div className='author'>{report.Writter}</div>
                </div>
            </div>
            <div className="report-information">

                <h1 className='report_title'>{report.title}</h1>

                <p className='report_data'>{report.reportOutline}</p>
            </div>


        </div>
    )


export default ReportCard
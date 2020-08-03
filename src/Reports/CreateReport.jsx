import React from 'react';
import FormInput from '../Forms/FormInput';
import FormArea from '../Forms/FormArea';
import CustomButton from '../Forms/CustomButton';
import { connect } from 'react-redux';
import { compileReport } from '../Store/Actions/reportAction'
import './CreateReportStyles.scss'

class CreateReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ' ',
            category: ' ',
            reportOutline: ' ',
            report: ' ',
        };
    }


    handleSubmit = event => {
        event.preventDefault();
            this.props.compileReport(this.state)
            this.setState({
                title: ' ',
                category: ' ',
                reportOutline: ' ',
                report: ' '
            }
            )

    };

    handleChange = event => {
        const { value, name } = event.target;


        this.setState({ [name]: value });
    };

    render() {

        return (
            <div className="create-report">
                <div className='adminheader'>
                    <h2 >Admin</h2>
                    <span>Create you Report</span>
                </div>


                <form name='create-report' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='title'
                        type="text"
                        value={this.state.title} 
                        handlechange={this.handleChange}
                        label='title'

                    />
                  
                    <FormArea
                        name='reportOutline'
                        type="text"
                        value={this.state.reportOutline} 
                        handlechange={this.handleChange}
                    />
                  
                    <select className='category'
                        name='category'
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.category} 
                        label='category'
                    >


                        <option className='categories' value='RetroRabona'>Retro Rabona</option>
                        <option className='categories' value='Transfers'>Transfers</option>
                        <option className='categories' value='KickUps'>Kick Ups(dates)</option>
                        <option className='categories' value='BehindTheBall'>Behind The Ball</option>
                        <option className='categories' value='CrimsonCannon'>Crimson Cannon</option>
                    </select>
                    
                    <FormArea
                        name='report'
                        type="text"
                        value={this.state.report} 
                        handlechange={this.handleChange}
                        label='report'
                    />



                    <div className='button'>
                        <CustomButton type='submit'> Publish </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebaseS.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        compileReport: (report) => dispatch(compileReport(report))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReport);
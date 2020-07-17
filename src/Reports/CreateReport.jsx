import React from 'react';
import FormInput from '../Forms/FormInput';
import FormArea from '../Forms/FormArea';
import CustomButton from '../Forms/CustomButton';
import { connect } from 'react-redux';
import { compileReport } from '../Store/Actions/reportAction'
import './CreateReportStyles.scss'


const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(valid => {
        valid.length > 0 && (valid = false);
    });
}

class CreateReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            category: null,
            reportOutline: null,
            report: null,
            formErrors: {
                title: '',
                category: '',
                reportOutline: '',
                report: ''

            }
        };
    }


    handleSubmit = event => {
        event.preventDefault();
        if (formValid(this.state.formErrors)) {
            this.props.compileReport(this.state)
            this.setState({
                title: ' ',
                category: ' ',
                reportOutline: ' ',
                report: ' '
            }
            )

        } else {
            alert('try again')
        };









    };

    handleChange = event => {
        const { value, name } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'title':
                formErrors.title = value.length < 3 ? "please enter your report title" : "";
                break;
            case 'reportOutline':
                formErrors.reportOutline = value.length < 3 ? "please enter report summary" : "";
                break;
            case 'category':
                formErrors.category = value.length < 3 ? "please select a category" : "";
                break;
            case 'report':
                formErrors.report = value.length < 3 ? "please enter report" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
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
                        handleChange={this.handleChange}
                        label='title'

                    />
                    {this.state.formErrors.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.reportOutline}</span>
                    )}
                    <FormArea
                        name='reportOutline'
                        type="text"
                        value={this.state.reportOutline} 
                        handleChange={this.handleChange}
                    />
                    {this.state.formErrors.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.category}</span>
                    )}
                    <select className='category'
                        name='category'
                        type="text"
                        handleChange={this.handleChange}
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
                    {this.state.formErrors.length > 0 && (
                        <span className="errorMessage">{this.state.formErrors.report}</span>)}
                    <FormArea
                        name='report'
                        type="text"
                        value={this.state.report} 
                        handleChange={this.handleChange}
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
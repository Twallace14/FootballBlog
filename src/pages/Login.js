import React from 'react';
import './Login.scss';
import FormInput from '../Forms/FormInput';
import CustomButton from '../Forms/CustomButton';
import { auth } from '../Firebase/fbConfig';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: ' ', password: ' ' });
        } catch (error) {
            console.log(error);
        };

    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h1>I am an Reporter</h1>
                <span>Sign in With your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email} required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password} required
                        handleChange={this.handleChange}
                        label='password'
                    />
                    <div className='button'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
import React from 'react'
import { NavLink } from 'react-router-dom'
import './ExternalLinkStyles.scss';

const SignInLinks = () => {
    return (
        <ul className='external-links'>
            <li className='optionslinks'> <NavLink className='x-option' to='/LogIn'>Sign In</NavLink></li>
        </ul>
    )
}

export default SignInLinks;
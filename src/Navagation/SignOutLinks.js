import React from 'react';
import { NavLink } from 'react-router-dom';
import './ExternalLinkStyles.scss';
import {auth} from '../Firebase/fbConfig'

const SignOutLinks = () => {
    return (
        <ul className='external-links'>
            <li className='optionslinks'><NavLink className='x-option' to='/CreateReport'>Create Report</NavLink></li>
            <li className='optionslinks'><NavLink className='x-option' to='Login' onClick={() => auth.signOut()} >Sign Out</NavLink></li>

        </ul>
    )
}

export default SignOutLinks;

import React from 'react'
import './NavbarStyles.scss'
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux';



const Navbar = ({ currentUser }) => (
  <div className="header">
    <Link className='logo-container' to="/">
      <img  className='logo' src='/rabonaletters.png' alt='rabonalogo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/Articles'>
        Articles
            </Link>
    </div>
    <div className='options'>
      {currentUser ? (

        <SignOutLinks />

      ) : (
            <SignInLinks />
        )}


    </div>

  </div>


);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Navbar);
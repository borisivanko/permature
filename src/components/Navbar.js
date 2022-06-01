import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {FaHome, FaPlus, FaSignOutAlt} from 'react-icons/fa';
import {useAuth} from '../contexts/AuthContext';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const {logout} = useAuth();

  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav>
      <div className='navigation'>
        <NavLink to='/'>
          <img src={logo} alt='Logo'/>
        </NavLink>
        <NavLink to='/'>
          <FaHome className='icon' size={30}/>
        </NavLink>
        <NavLink to='/new-permature'>
          <FaPlus className='icon' size={30}/>
        </NavLink>
      </div>
      <div>
        <button onClick={handleLogout}>
          <FaSignOutAlt className='icon' size={30}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const [user] = useAuthState(auth);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>My Profile</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        <li><Link to='/'>About US</Link></li>
        {user ? <li><Link to='/login' onClick={logout}>Log Out</Link></li> :
        <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className=" ">
                <img className='w-28' src="https://www.banglamotor.net/images/logo/keeway_bikes_logo.jpg" alt='' />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end flex lg:hidden">
                <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    // Use the selector to access the cart state
    const totalQuantity = useSelector((state) => state.cart.quantity);

    // Extract the total quantity

    return (
        <div className='Navbar'>
            <ul className="navbar-ul">
                <Link  className='nav-link' to='/'> <li >Home</li></Link>
                <Link  className='nav-link pp'> <li>Total: {totalQuantity}</li></Link>
                <Link className='nav-link' to='/cart'> <li>Cart</li></Link>
            </ul>
        </div >
    );
};

export default Navbar;

import React from 'react'
import { Link, Navigate } from 'react-router-dom'

import {UserContext } from './cartContext/UserContext'
import {CartContext } from './cartContext/cartContext'
import { FiUser } from "react-icons/fi";




export default function Navbar (){

    const {users, setUser, setName} = React.useContext(UserContext)
    const {setCart} = React.useContext(CartContext)

    function logOut () {
        
            localStorage.removeItem('user')
            localStorage.removeItem('name')
            setUser('')
            setName('')
            
            




        
    }

    
    return (

        <div className='navbar--container'>
            <Link to="/">
            <div>
                <img className="logo--class" src ="/images/my--logo.png" alt="my--logo" />
            </div>
            </Link>
            <div className="navbar--links">
            <Link to="/training">TRAINING</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
            
            {!users && <Link to="/register"> <FiUser style={{fontSize: '20px'}} /> </Link> }
            {users && <Link to="" onClick={logOut}>LOG OUT</Link>}
            
            
            
            </div>

            </div>

    )
    
}
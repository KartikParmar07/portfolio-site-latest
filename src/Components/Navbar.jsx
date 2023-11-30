import React from 'react'
import './Styles.css'
import Button from './Button'

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
            <h1 className='logo'>K <span>P</span></h1>
            <div className='links'>
            <p className='isActive'>Home</p>
            <p>Services</p>
            <p>About</p>
            <p>Portfolio</p>
            <p>Contact</p>
        </div>  
        <Button />
        </div>
    </div>
    </>
  )
}

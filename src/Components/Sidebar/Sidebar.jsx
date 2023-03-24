import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri'
import {FaUserSecret} from 'react-icons/fa'
import {GiShoppingCart} from 'react-icons/gi'
import {BsHandbag} from 'react-icons/bs'
import{FiMessageCircle} from 'react-icons/fi'
import {IoSettingsOutline} from 'react-icons/io5'
import './Sidebar.css'

function Sidebar() {
  const[activeChoice,setActiveChoice]=useState('dashboard')
  return (
    <div style={{display:'flex'}}>

      <ul className='ul-sidebar'>
        
        <NavLink to={'/dashboard'} className={activeChoice==='dashboard' ?'sidebar-NavLink active-navlink-sidebar':'sidebar-NavLink'} onClick={()=>setActiveChoice('dashboard')}>
          <RiHomeFill className='sidebar-icon'/>
          <div className='navLink-name'>Dashboard</div>
        </NavLink>
        <NavLink to={'/profile'}  className={activeChoice==='profile' ?'sidebar-NavLink active-navlink-sidebar':'sidebar-NavLink'} onClick={()=>setActiveChoice('profile')} >
          <FaUserSecret className='sidebar-icon'/>
          <div className='navLink-name'>Profile</div>
        </NavLink>
        <NavLink to={'/order'}  className={activeChoice==='order' ?'sidebar-NavLink active-navlink-sidebar':'sidebar-NavLink'} onClick={()=>setActiveChoice('order')} >
          <GiShoppingCart className='sidebar-icon'/>
          <div className='navLink-name'>Order</div>
        </NavLink>
        <NavLink to={'/product'}  className={activeChoice==='product' ?'sidebar-NavLink active-navlink-sidebar':'sidebar-NavLink'} onClick={()=>setActiveChoice('product')} >
          <BsHandbag className='sidebar-icon'/>
          <div className='navLink-name'>Product</div>
        </NavLink>
        <NavLink to={'/message'}  className={activeChoice==='message' ?'sidebar-NavLink active-navlink-sidebar':'sidebar-NavLink'} onClick={()=>setActiveChoice('message')} >
          <FiMessageCircle className='sidebar-icon'/>
          <div className='navLink-name'>Message</div>
        </NavLink>
        <NavLink to={'/settings'}  className={activeChoice==='settings' ?'sidebar-NavLink active-navlink-sidebar':'sidebar-NavLink'} onClick={()=>setActiveChoice('settings')} >
          <IoSettingsOutline className='sidebar-icon'/>
          <div className='navLink-name'>Setting</div>
        </NavLink>

      </ul>
                    <div className="sidebar-devider"></div>

    </div>
  )
}

export default Sidebar
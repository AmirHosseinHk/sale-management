import React from 'react'
import './Header.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {VscBell} from 'react-icons/vsc'
import {MdKeyboardArrowDown} from 'react-icons/md'

function Header() {
  return (
    <div className='Header'>
      <div className="inputBox ">
        <AiOutlineSearch />
        <input type="text" placeholder='search here...'/>
      </div>
      <div className="header-profileBox">
        <VscBell className='bell'/>
        <img src="./img/1.jpg" alt="" />
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}

export default Header
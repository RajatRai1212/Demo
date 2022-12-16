import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {FaAngleDown} from 'react-icons/fa'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className="row  mt-3  px-2 searchbar ">
      <div className="col px-2 d-flex ">

        <div className="px-2 icon" ><SearchIcon /></div>
        <div className="px-1 searchDiv icon"><input type="text" placeholder='Type to search...' /></div>
        <div className='px-2 icon'><SettingsIcon /></div>
        <div className='px-2 icon'><ChatBubbleOutlineIcon /></div>
        <div className='px-2 bell icon'><NotificationsNoneIcon /></div>
        <div className="px-2 text-center">
          <h6>Thomas Brown</h6>
          <p className='icon'>Developer</p>
          
        </div>
        <div className='px-2'><img src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/2x/external-astronaut-space-tulpahn-outline-color-tulpahn.png" alt="User image" /></div>
        <div className="px-1 icon"><FaAngleDown/></div>



      </div>
    </div>
  )
}

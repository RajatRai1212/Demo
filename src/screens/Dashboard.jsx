import React from 'react'
import './Dashboard.css'
import SideBar from '../Components/SideBar/SideBar'
import SearchBar from '../Components/SearchBar/SearchBar'

const Dashboard = () => {
  return (
      <div className='container-fluid m-0 p-0'>
        <div className="row m-0 p-0">
          <div className="col  m-2 p-0 left bg-light">
          <SideBar/>
          </div>
          <div><SearchBar/></div>

        </div>
        
      </div>
  )
}

export default Dashboard

{/* <div className="container-fluid m-0 p-0">
<div className="row m-0 p-0">
   <div className="col-2 m-0 p-0 left bg-light">
   <SideBar/>
   </div>
   <div className="col-10 right bg-dark">
fadsfs
   </div>
</div>
</div> */}
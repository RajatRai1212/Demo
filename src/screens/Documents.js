import React from 'react'
import SearchBar from '../Components/searchbar/SearchBar'
import SideBar from '../Components/sidebar/SideBar'

const Documents = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row m-0 p-0">
        <div className="col-2 border-right m-0 p-0 left">
          <SideBar />
        </div>
        <div className="col-10 p-0 m-0 right">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <SearchBar />
            </div>
          </div>
          <div className='col-10 text h-100 text-center'>
            <h4>this isDocuments page</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents
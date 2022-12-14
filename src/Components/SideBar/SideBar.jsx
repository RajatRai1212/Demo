import './SideBar.css'
import { BsClock } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { VscExtensions} from 'react-icons/vsc';
import { BsNewspaper } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { BsCardList } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BiHelpCircle} from 'react-icons/bi';


{/* <div className="row mb-3 m-0 p-0 border-gray">
<div className="d-flex flex-row col px-3 py-3 m-0 p-0">
     <img src="https://img.icons8.com/cute-clipart/512/rocket.png" alt="rocket" />
     <h3> &nbsp; Artemis</h3>
 </div>
</div> */}


 const SideBar = () => {
   return (

          <div className='sidebar'>
            <div className='row'>
              <div className='col'>

                <div className='row mb-3 m-0 p-0 border-gray'>
                  <div className='col banner' >
                    <img src="https://img.icons8.com/cute-clipart/512/rocket.png" alt="rocket" />
                    <h3>&nbsp; Artis</h3>

                  </div>

                </div>
                 
                <div className='row'>
                  <div className='col'>
                    <span style={{fontSize:"small" ,fontWeight: 500 }}>MAIN</span>
                    <ul className='p-0 m-0'>
                      <li className='f-size py-2 px-2' ><BsClock/> &nbsp; Dashboard</li>
                      <li className='f-size py-2 px-2'><BsGlobe/> &nbsp; Discover</li>
                      <li className='py-2 px-2 f-size'><FiUser/> &nbsp; Users</li>
                      <li className='f-size py-2 px-2'><BsBook/> &nbsp; Documents</li>
                      <li className='py-2 px-2 f-size'><VscExtensions/> &nbsp; Applications</li>
                      <li className='py-2 px-2 f-size'>< BsNewspaper/> &nbsp; Pages</li>

                    </ul>
                  </div>

                </div>
                <div className='row'>
                  <div className='col'>
                    <span style={{fontSize:'small', fontWeight: '500' }}>Secondary</span>
                    <ul className='p-0 m-0'>
                    <li className='py-2 px-2 f-size'><BiHelpCircle/> &nbsp; Support Center</li>
                    <li className='py-2 px-2 f-size'><HiOutlineInboxIn/> &nbsp; Inbox</li>
                    <li className='py-2 px-2 f-size'><AiOutlineFolderOpen/> &nbsp; File Manager</li>
                    <li className='py-2 px-2 f-size'><BsCardList/> &nbsp; Data List</li>
                    </ul>
                  </div>

                </div >
                <div className='row'>
                  <div className='col'>
                    <ul className='p-0 m-0'>
                     <li className='py-2 px-2 f-size'><BsGear/> &nbsp; Settings</li>
                     <li className='py-2 px-2 f-size'><BiLogOut/> &nbsp; Log Out</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

          </div>




   );
 };

 export default SideBar;
import './SideBar.css'
import { BsClock } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { VscExtensions } from 'react-icons/vsc';
import { BsNewspaper } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { BsCardList } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'



const SideBar = () => {
  return (

    <div className='sidebar'>
      <div className='row'>
        <div className='col'>

          <div className='row mb-7 m-0  border-gray'>
            <div className='col banner py-3 mb-2' >
              <img src="https://img.icons8.com/cute-clipart/512/rocket.png" alt="rocket" />
              <h3 >&nbsp; Artis</h3>

            </div>

          </div>

          <div className='row'>
            <div className='col'>
              <span style={{ fontSize: "small", fontWeight: 500 }}>MAIN</span>
              <ul className='p-0 m-0'>
                <Link className='removes' to='/'><li className='py-2 mx-0 px-2 f-size'><BsClock /> &nbsp; Dashboard</li></Link>
                <Link to="/Discover" className='removes'><li className='py-2 px-2 f-size'><BsGlobe /> &nbsp; Discover</li></Link>
                <Link to="/Users" className='removes'><li className='py-2 px-2 f-size'><FiUser /> &nbsp; Users</li></Link>
                <Link to="/Documents" className='removes'><li className='py-2 px-2 f-size'><BsBook /> &nbsp; Documents</li></Link>
                <Link to="/Applications" className='removes'><li className='py-2 px-2 f-size'><VscExtensions /> &nbsp; Applications</li></Link>
                <Link to="/pages" className='removes'><li className='py-2 px-2 f-size'>< BsNewspaper /> &nbsp; Pages</li></Link>
              </ul>
            </div>

          </div>
          <div className='row'>
            <div className='col'>
              <span style={{ fontSize: 'small', fontWeight: '500' }}>Secondary</span>
              <ul className='p-0 m-0'>
                <li className='py-2 px-2 f-size'><BiHelpCircle /> &nbsp; Support Center</li>
                <li className='py-2 px-2 f-size'><HiOutlineInboxIn /> &nbsp; Inbox</li>
                <li className='py-2 px-2 f-size'><AiOutlineFolderOpen /> &nbsp; File Manager</li>
                <li className='py-2 px-2 f-size'><BsCardList /> &nbsp; Data List</li>
              </ul>
            </div>

          </div >
          <div className='row'>
            <div className='col'>
              <ul className='p-0 m-0'>
                <li className='py-2 px-2 f-size'><BsGear /> &nbsp; Settings</li>
                <li className='py-2 px-2 f-size'><BiLogOut /> &nbsp; Log Out</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

    </div>




  );
};

export default SideBar;
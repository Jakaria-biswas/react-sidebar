import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { sidebarData } from './SidebarData';
import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
  
    const showSidebar = () => setSidebar(!sidebar)
    console.log(sidebar)
    return (
        <>
            <div className="navbar">
                   <Link to="#" className="menu-bars">      
                      <FaIcons.FaBars onClick={showSidebar}/> 

                   </Link>
                   <h2 style={{marginLeft:"20px"}}>Dashboard Information</h2>
            </div>
            <nav className={sidebar ? "nav-menu active" : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar} >
                    <li className="navbar-toggle">
                         <Link to="#" className='menu-bars'>
                              <AiIcons.AiOutlineClose />
                         </Link>
                    </li>
                    <hr />
                    {
                        sidebarData.map((item, index)=> {
                             return(
                                    <li key={index} className={item.cName}>
                                           <Link to={item.path}>
                                               {item.icon}
                                                <span> {item.title}</span>
                                           </Link>
                                    </li>
                             )
                        })
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
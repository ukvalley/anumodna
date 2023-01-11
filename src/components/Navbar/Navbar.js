
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//import icons from react icons
import { FaList, FaRegHeart,FaHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog ,BiStats} from "react-icons/bi";
import {ImProfile,ImHome} from "react-icons/im";
import {VscCompassActive} from "react-icons/vsc";
import {AiOutlineTeam} from "react-icons/ai"
import {GiReceiveMoney}from "react-icons/gi"

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
         
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<ImHome />}>
                <Link to="/Dashboard"></Link>Home
              </MenuItem>

              <SubMenu title=" Profile " icon={<ImProfile />}>
                <MenuItem><Link to="/profile/789"></Link>Edit Profile   </MenuItem>
                <MenuItem><Link to="/Change_Bank_details/789"></Link>Edit KVC Details  </MenuItem>
                <MenuItem><Link to="/Change_password"></Link>Change Password  </MenuItem>
                <MenuItem><Link to="/Change_Transaction_Pin/789"></Link>Change Transection Pin  </MenuItem>
              </SubMenu>
              
              <SubMenu title=" Activation " icon={<VscCompassActive />}>
                <MenuItem><Link to="/Make_deposite/789"></Link> Make Deposite   </MenuItem>
                <MenuItem><Link to="/Package_Activate"></Link> Package Activation  </MenuItem>
                <MenuItem><Link to="/Fund_transfer"></Link> Fund Transfer  </MenuItem>
                <MenuItem><Link to="/Internal_transfer"></Link> Internal Transfer  </MenuItem>
              </SubMenu>

              <SubMenu title=" Team " icon={<AiOutlineTeam />}>
                <MenuItem><Link to="/Downline"></Link> Downline  </MenuItem>
                <MenuItem> Genealogy  </MenuItem>
               
              </SubMenu>

              <MenuItem icon={<GiReceiveMoney />}><Link to="/Withdraw/789"></Link>Withdraw</MenuItem>

              <SubMenu title=" Report " icon={<BiStats />}>
                <MenuItem><Link to="/Make_deposite_report"></Link> Make Deposite   </MenuItem>
                <MenuItem><Link to="/Activate_Package_Report"></Link> Package Activation  </MenuItem>
                <MenuItem><Link to="/Fund_transfer_report"></Link> Fund Transfer  </MenuItem>
                <MenuItem><Link to="/Internal_Fund_Report" ></Link>Internal Transfer  </MenuItem>
              </SubMenu>
              <MenuItem icon={<BiCog />}>Logout</MenuItem>
            </Menu>
          </SidebarContent>
         
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;

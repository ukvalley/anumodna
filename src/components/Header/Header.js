import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logoUrl from '../../assets/lo.png';
import home from '../../assets/home.png';
import notification from '../../assets/n1.png';
import n2 from '../../assets/n2.png';
import menu from '../../assets/menu.png';
import { BackButton } from '../BackButton';
import anumodanalogo from '../../assets/anumodanalogo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBell } from 'react-icons/fa';



import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu
} from '@szhsin/react-menu';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import '@szhsin/react-menu/dist/core.css';

const Header = () => (
  <div className="header lef">
     

     <>
     
     <Menu menuButton={<img src={menu} className="bell mt-3"  align="right"/>}>
            <SubMenu label=" Quick Access">
                <MenuItem><Link to="/News">News</Link></MenuItem>
                <MenuItem><Link to="/Category">Stavan</Link></MenuItem>
                <MenuItem><Link to="/Anumodana">About</Link></MenuItem>
            </SubMenu>
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/Profiles">Bio Data</Link></MenuItem>
        </Menu> 
      <Link to='/'> <img src={anumodanalogo} className='logo'/></Link> 

     
      <BackButton/> 
      <FaBell  className="header_icon" />

     </>

    
   
   <div className=''>
      <a src={logoUrl}></a>
   </div>
    </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

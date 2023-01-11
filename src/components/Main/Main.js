import { useState } from 'react';
import './Main.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import Stavan from '../Stavan/Stavan';
import Group_member from '../Group_member/Group_member';
import Song from '../Song/Song';
import Anumodana from '../Anumodana/Anumodana';

import Category from '../Category/Category';

import News from '../News/News';
import Event from '../Event/Event';
import Gallery from '../Gallery/Gallery';
import Matrimony from '../Matrimony/Matrimony';

import NewEvent from '../NewEvent/NewEvent';
import NewNews from '../NewNews/NewNews';

import Vcard from '../Vcard/Vcard';
import All from '../All/All';

import Matrimony_profile from '../Matrimony_profile/Matrimony_profile';
import Full_Profile from '../Full_Profile/Full_Profile';
import Bio_Data from '../Bio_Data/Bio_Data';

import Registration from '../Registration/Registration';
import Otp_check from '../Otp_check/Otp_check';
import Profiles from '../Profiles/Profiles';
import Update_Profile from '../Update_Profile/Update_Profile';


const Main = () => {

  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

 return (
  <div className='Main'>
<>
    <Header
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
      />

    

      <Footer
      menuCollapse={menuCollapse}
      menuIconClick={menuIconClick}
      />

      

  <Routes>
     

  <Route path="/" element={<Dashboard
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>


<Route path="/Registration" element={<Registration/>}>
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
</Route>

<Route path="/Profiles" element={<Profiles/>}>
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
</Route>

<Route path="/Update_Profile/:id" element={<Update_Profile/>}>
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
</Route>

<Route path="/Otp_check/:id" element={<Otp_check/>}>
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
</Route>

<Route path="/Stavan/:id" element={<Stavan/>}>
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
</Route>

    <Route path="/Group_member" element={<Group_member
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
    />}></Route>



<Route path="/Vcard/:id" element={<Vcard
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
    />}></Route>

<Route path="/Song/:id" element={<Song
menuCollapse={menuCollapse}
menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Anumodana" element={<Anumodana
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Category" element={<Category
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/News" element={<News
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Gallery" element={<Gallery
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Event" element={<Event
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/All/:type" element={<All
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>



<Route path="/NewEvent/:id" element={<NewEvent
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/NewNews/:id" element={<NewNews
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Matrimony" element={<Matrimony
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

 
<Route path="/Matrimony_profile/:gender" element={<Matrimony_profile
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Full_Profile/:id" element={<Full_Profile
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>

<Route path="/Bio_Data" element={<Bio_Data
        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
/>}></Route>





  </Routes>

  </>   
  </div>
 )
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;

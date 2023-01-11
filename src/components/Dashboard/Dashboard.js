import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import m from '../../assets/m.png';
import f from "../../assets/g.png";
import i from "../../assets/i.png";
import logoUrl from '../../assets/lo.png';
import lo from '../../assets/logo.png';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import banner from "../../assets/banner.png";
import news from "../../assets/news.png";
import gallery from "../../assets/gallery.png";
import event from "../../assets/event.png";
import matrimony from "../../assets/matrimony.png";

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import axios from 'axios';


const Dashboard = () => {
  const [Loader, setLoader] = useState(false);

  const [Data, setData] = useState(null);

  const [Data1, setData1] = useState(null);
  const [Data2, setData2] = useState(null);
  const [Data3, setData3] = useState(null);

  useEffect(() => {
    fetch_data();  
}, []);


  async function fetch_data(){
    setLoader(true);
    
    axios.get("https://globalwin.in/j12/api/get_adv")
    .then(res => {

      setData(res.data.adv_data);

      setData1(res.data.adv_data1.image);
      setData2(res.data.adv_data2.image);
      setData3(res.data.adv_data3.image);
      console.log(res.data);

      setLoader(false);
  }).catch(error => {
      console.log('errr', error)
      setLoader(false);
  })
  }


  return(

  <div className="Dashboard mt-1 ">
       
  <div className="container ">
   
  <div className='container'>
        <div className='col-md-12 mt-3 text-center '>
          <AliceCarousel disableButtonsControls="false" infinite="true" autoPlay autoPlayInterval="3000">
          <img  src={"https://globalwin.in/j12/public/image/"+Data1} className="sliderimg imageslider"/>
          <img  src={"https://globalwin.in/j12/public/image/"+Data2} className="sliderimg imageslider"/>
          <img  src={"https://globalwin.in/j12/public/image/"+Data3} className="sliderimg imageslider"/>
         </AliceCarousel>
         </div>
    </div>
  
   <div className="grid-container">
     <Link to="/Category"> <div className="grid-item"><img className='card_img_s'src={m}></img>
     </div></Link>
     
     <Link to="/Group_member"><div className="grid-item"><img className='card_img_s'src={f}></img>
    </div></Link>

     <Link to="/Matrimony"> <div className="grid-item">  <img className='card_img_s'src={matrimony}></img>
     </div></Link>

      <div className="grid-itemm font_s">स्तवन</div>
      <div className="grid-itemm font_s">ग्रूप्‌  सदस्य</div>
      <div className="grid-itemm font_s">मॅट्रिमोनी </div>
  
     <Link to="/News"> <div className="grid-item"><img className='card_img_s'src={news}></img>
     </div></Link>
     
     <Link to="/Gallery"><div className="grid-item"><img className='card_img_s'src={gallery}></img>
    </div></Link>

     <Link to="/All/all"> <div className="grid-item">  <img className='card_img_s'src={event}></img>
     </div></Link>
   
      <div className="grid-itemm font_s">न्युज </div>
      <div className="grid-itemm font_s">गॅलरी</div>
      <div className="grid-itemm font_s">इव्हेंट </div>

      <Link to="/Anumodana"> <div className="grid-itemm"><img className='card_img_s'src={lo}></img>
     </div></Link>

     <div></div>
     <div></div>

    
     <div className="grid-itemm font_s">अनुमोदना ग्रुप</div>
   </div>

  
  </div>

     
     </div>    
       

       )


  };

  Dashboard.propTypes = {};

  Dashboard.defaultProps = {};

export default Dashboard;

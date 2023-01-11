import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Matrimony.css';
import { Link } from "react-router-dom";
import male from '../../assets/man.png';
import female from '../../assets/woman.png';
import cp from '../../assets/cp.png';
import couple from '../../assets/couple.png';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Loder from '../Loder';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Matrimony = () => {


  const [Loader, setLoader] = useState(false);
  const [Data, setData] = useState(null);

  const [Data1, setData1] = useState(null);
  const [Data2, setData2] = useState(null);
  const [Data3, setData3] = useState(null);

  const {id } = useParams();
  const [value, setValue] = useState('');

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

    if (Loader == true) {
      return (
         <Loder /> )       
      }


  return(

    <div className="Matrimony">
      

       <div className="page-wrapper">

      

       <div className="col-12 text-center mt-4">
       <div className='row'>
      
        <div className='col-md-6'>
        <Link to={"/Matrimony_profile/male"}>
          <div className="profile-boxs">
          <img className='img_G' src={male}
             alt="profile pic" />
          <h3 className='text-capitalize ff1 link_a'>Male</h3>
         </div>
       </Link>
        </div>
      
        <div className='col-md-6'>
        <Link to={"/Matrimony_profile/female"}>
          <div className="profile-boxs">
          <img className='img_G' src={female}
             alt="profile pic" />
          <h3 className='text-capitalize ff1 link_a'>Female</h3>
         </div>
       </Link>
        </div>


        </div>         
       </div> 
      <hr/>
       <div className='col-md-6l mt-3'>
       <Link to={"/Registration"}>
          <div className="profile-boxs">
          <img className='img_G' src={cp}
             alt="profile pic" />
          <p className='text-capitalize ffc link_a'>Create Profile</p>
         </div>
       </Link>
      </div>

      <div className='col-md-6l mt-3'>
       
       <div className="profile-boxs">
       <img className='img_G' src={couple}
          alt="profile pic" />
       <p className='text-capitalize ffc link_a'>Success Story</p>
      </div>
    
     </div>
    
     <div className='container'>
        <div className='col-md-12 mt-3 text-center '>
          <AliceCarousel disableButtonsControls="false" infinite="true" autoPlay autoPlayInterval="3000">
          <img  src={"https://globalwin.in/j12/public/image/"+Data1} className="sliderimg imageslider"/>
          <img  src={"https://globalwin.in/j12/public/image/"+Data2} className="sliderimg imageslider"/>
          <img  src={"https://globalwin.in/j12/public/image/"+Data3} className="sliderimg imageslider"/>
         </AliceCarousel>
         </div>
    </div>
       </div>

       
     

   </div>    
       

       ) };

       Matrimony.propTypes = {};

       Matrimony.defaultProps = {};

export default Matrimony;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Full_Profile.css';
import { Link } from "react-router-dom";
import male from '../../assets/man.png';
import female from '../../assets/woman.png';
import Loder from '../Loder';

import { AiOutlineHome ,AiFillCheckCircle,AiFillHome} from 'react-icons/ai';
import {MdOutlineFamilyRestroom} from 'react-icons/md';
import {FaGenderless,FaRegAddressBook} from 'react-icons/fa';
import {MdBloodtype} from 'react-icons/md';
import {SiBookstack} from 'react-icons/si';

const Full_Profile = () => {

 const [start, setstart] =useState('');
  const [Loader, setLoader] = useState(false);
  const [Data, setData] = useState(null);
  const {id } = useParams();
  const [value, setValue] = useState("");

  useEffect(() => {
      fetch_data();           
  }, []);

 

 
  async function fetch_data(){
      setLoader(true);
      
      axios.get("https://globalwin.in/j12/api/get_matrimony/"+id)
      .then(res => {
        
        setData(res.data.get_data);
        setstart(res.data.start_t);
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

    <div className="Full_Profile">
       <div className='container'>
       <div className="page-wrappers ">
       <div className="col-12 text-center">
       <div className='row'>
       {Data != null
          ?
     <>
        <div className='col-md-6 mt-3'>
        <div class="card flex-row pro">
            <img class="card-img-left example-card-img-responsive imgG" 
            src={"https://globalwin.in/j12/public/image/"+Data.image} />
            <div class="card-body">
            <p class="card-title h5 mt-4">{Data.full_name}</p>
            <p class="card-text age mt-3">{Data.daytime}</p>
        </div>
        </div>
       
        <div className='card mt-3'>
        <ul className='mt-3' style={{ listStyle: "none" }}>
         <li className='ic1'><AiFillCheckCircle/> Complexion: {Data.complexion}</li>
         <li className='ic1'><AiFillCheckCircle/>	Hight: {Data.hight}</li>        
         <li className='ic1'><FaGenderless/>	Gender: {Data.gender}</li>
         <li className='ic2'><MdBloodtype/><span className='ic3'>	Blood : {Data.blood}</span></li>
         <li className='ic1'><FaGenderless/>	Hobbies: {Data.hobbies}</li>
         <li className='ic1'><SiBookstack/>	Education: {Data.education}</li> 
        </ul>
       </div>
       
       <div className='card mt-3'>
       <h6 className='text-center sakha'>Sakha</h6>
        <ul className='mt-3' style={{ listStyle: "none" }}>
         <li className='ic1'><AiFillCheckCircle/> Self : {Data.self}</li>
         <li className='ic1'><AiFillCheckCircle/> Mamasa : {Data.mamasa}</li>        
         <li className='ic1'><FaGenderless/> Dadisa : {Data.dadisa}</li>
        <li className='ic1'><FaGenderless/>	Nanisa : {Data.nanisa}</li>
        </ul>
       </div>

       <div className='card mt-3'>
       <h6 className='text-center sakha'>Family</h6>
        <ul className='mt-3' style={{ listStyle: "none" }}>
         <li className='ic1'><AiFillCheckCircle/> Grand Father : {Data.grandfather}</li>
         <li className='ic1'><AiFillCheckCircle/> Grand Mother : {Data.grandmother}</li>
           
         <li className='ic1'><FaGenderless/> Father Name : {Data.fathername}</li>
        <li className='ic1'><FaGenderless/>	Mother Name : {Data.mothername}</li>

        <li className='ic1'><FaGenderless/> Brother Name : {Data.brothername}</li>
        <li className='ic1'><FaGenderless/>	Sister Name : {Data.sistername}</li>
        </ul>
       </div>

       <div className='card mt-3'>
       <h6 className='text-center sakha'>Address</h6>
        <ul className='mt-3' style={{ listStyle: "none" }}>
         <li className='ic1'><FaRegAddressBook/> Contact Number : {Data.contactnumber}</li>
         <li className='ic1'><FaRegAddressBook/> Self Contact Number : {Data.selfnumber}</li>
         
         <li className='ic1'><AiFillHome/> Address : {Data.address}</li>
        </ul>
       </div>
       
 
       </div>
      
       </>

:<></>
}   
      


        </div>

          
     </div>
    </div>
   </div>    
   </div>

       ) };

       Full_Profile.propTypes = {};

       Full_Profile.defaultProps = {};

export default Full_Profile;

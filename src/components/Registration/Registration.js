import React, { useState, useEffect , useRef} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';

import Loder from '../Loder';


const Registration = () => {
 
    const [Loader, SetLoader] = useState(false);
    const {id} = useParams();
    const [full_name, setfull_name]  = useState("");
    const [number, setnumber]  = useState("");
    const [email, setemail]  = useState("");

    const [otp, setotp]  = useState("");   
    const [user_id1,Setuser_id1] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();  

        registration_post(full_name,number,email); 

      }
    
    
       async function registration_post(full_name,number,email){
       
        SetLoader(true);
        axios.post("https://globalwin.in/j12/api/registration_post", 
        { 
          full_name:full_name,
             number: number, 
             email:email        
          }).then(function (response) {
            //console.log(response.data.user_id);
           const token  =  response.data.token;
            Setuser_id1(response.data.user_id);
            if (response.data.status == "success") {
              SetLoader(false);  
              
              setfull_name('');
              setnumber('');
              setemail('');
             
              Swal.fire({
                title: response.data.message,
                text: 'Data Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              navigate('/Otp_check/'+response.data.user_id);
        }
        else {
            SetLoader(false);
          Swal.fire({
            title: response.data.message,
            text: 'Data Add failed',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        }
      })
      .catch(function (error) {
        SetLoader(false);
        console.log(error);
        Swal.fire({
          title: error.message,
          text: 'Data Add failed',
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      });
    }
    
    if (Loader == "true") {
    <Loader/>
    }
    
    
  return(

    <div className="Registration">
       
    <div className='container'>
        <h1 className='card-title title_size text-center'>Registration Details</h1>

   
        <form onSubmit={handleSubmit}>    
        <div className="form-group mt-3">
    <label>Enter Name</label>
    <input
      type="text"
      className="form-control"
      value={full_name}
      onChange={(e) => setfull_name(e.target.value)}   
      id="full_name" 
      placeholder="Enter Name"
    />
        </div>
        <div className="form-group mt-3">
    <label>Enter Mobile Number</label>
    <input
      type="text"
      className="form-control"
      value={number}
      onChange={(e) => setnumber(e.target.value)}   
      id="number" 
      placeholder="Enter Mobile Number"
    />
        </div>
        <div className="form-group mt-3">
    <label>Enter Email</label>
    <input
      type="text"
      className="form-control"
      value={email}
      onChange={(e) => setemail(e.target.value)}   
      id="email" 
      placeholder="Enter Email"
    />
        </div>

 <button type="submit" className="btn btn-primary mt-5">
    Get OTP
  </button>
        </form>
    </div>
    </div>

  
       

       ) };
 
       Registration.propTypes = {};

       Registration.defaultProps = {};

export default Registration;

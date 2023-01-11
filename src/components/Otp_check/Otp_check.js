import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Otp_check.css';

import Loder from '../Loder';


const Otp_check = () => {

    const [Loader, SetLoader] = useState(false);
    const [Data, setData] = useState(null);
    const { id } = useParams();

    const  [otp1, setotp1]  = useState("");
    const  [number, setnumber]  = useState("");
    const navigate = useNavigate();


    const [authTokens, setAuthTokens] = useState(
        localStorage.getItem("tokens") || ""
      );

      const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
      };

      const handleLogout = () => {
        localStorage.removeItem("tokens");
        setAuthTokens("");
      };



    const handleSubmit = (event) => {
        event.preventDefault();        
        otp_check(otp1);    
      }
    
    useEffect(() => {
        console.log(id);
   }, []);

       async function otp_check(){
       
        SetLoader(true);
        axios.post("https://globalwin.in/j12/api/otp_check/"+id, 
        { 
           otp:otp1,
          }).then(function (response) {
            console.log(response);
            if (response.data.status == "success") {
              SetLoader(false);             
              //setnumber('');
              setotp1('');
    
              Swal.fire({
                title: response.data.message,
                text: 'Data Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              console.log(id)
              setTokens(id);

              console.log("token",authTokens)

            //  return false;
              navigate('/Bio_Data');
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

    <div className="Otp_check">
       
    <div className='container'>
        <h1 className='card-title title_size text-center'>OTP Check</h1>

        <form onSubmit={handleSubmit}>
       
                    <p>
                        Enter OTP Sent to your mobile number XXXXXX123
                    </p>  
                   
      <div className="form-group mt-3">
    <label>Enter OTP</label>
    <input
      type="text"
      className="form-control"      
      onChange={(e) => setotp1(e.target.value)} 
      placeholder="Enter Digit OTP"
    />
  </div>
    
 
   
       
  <button type="submit" className="btn btn-primary mt-5">
    Verify OTP
  </button>
        </form>
        </div>
    </div>

  
       

       ) };

       Otp_check.propTypes = {};

       Otp_check.defaultProps = {};

export default Otp_check;

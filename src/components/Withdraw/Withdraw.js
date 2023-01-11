import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Withdraw.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





const Withdraw = () => {

  const [Loader, setLoader] = useState(false);
  const [wallet_balance, setwallet_balance] = useState('');
  const [transfer_amount,settransfer_amount] = useState(''); 
  const[tpin,settpin] = useState('');
  const [utr,setutr] = useState('');
  const [Data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch_data();
}, []);


async function fetch_data() {

    setLoader(true);
    await axios.get("https://globalwin.in/j12/api/amount_fetch_w/" + id)
    .then(res => {
      
      setData(res.data)
      console.log(res.data)

      setwallet_balance(res.data.amount_fetch.wallet_balance);

        if (res.data.status != "success") {
            Swal.fire({
                title: 'Data Not Found',
                text: 'Requested Data Not Found',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }
        setLoader(false);
        
    }).catch(error => {
        console.log('errr', error)
        setLoader(false);
    })
}

const handleSubmit = (event) => {
  event.preventDefault();

  Withdrawl(wallet_balance,transfer_amount,tpin);
  

}
  
async function Withdrawl(wallet_balance,transfer_amount,tpin) {
  
    setLoader(true);
  
    axios.post("https://globalwin.in/j12/api/payment_withdraw_post",
    {

      
        wallet_balance: wallet_balance,
        transfer_amount: transfer_amount,       
        tpin: tpin,
        
    }).then(function (response) {
        console.log(response);
        setLoader(false);
        if (response.data.status == "success") {
            Swal.fire({
                title: response.data.message,
                text: 'Data Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
        }

        else {
            setLoader(false);
            Swal.fire({
                title: response.data.message,
                text: 'Data Add failed',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }
    })
    .catch(function (error) {
        setLoader(false);
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
return (

    <Loader />

)

}
  return(
      <div className="Withdraw tstyle">
     
     <div className="container xyz ">
            <h5>Payment Withdraw</h5>
        <form onSubmit={handleSubmit}>
       
       <div className='row'>
       
        
          <label>
          Wallet Balance:
           <input type="text"    
           className='s' 
           value={wallet_balance}
           onChange={(e) => setwallet_balance(e.target.value)}         
            name="name" />
          </label>
          

         
          <label>
          Amount To Withdraw:
           <input type="text" 
           className='s1'  
           value={transfer_amount}
           onChange={(e) => settransfer_amount(e.target.value)}        
           name="name" />
          </label>
          
         <div className="form-check s2 mt-1">    
         <label className="form-check-label " >
         Tron Address 
         </label>
         <input
             className="form-control form-check-input mb-5"
             type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
             />       
        </div>

          <label>
          Transaction PIN:
           <input type="text" 
           className='s'
           value={tpin}
          onChange={(e) => settpin(e.target.value)}          
          name="name" />
          </label>
          
          <div className='mt-4'>
        <button type="submit" className=" btn btn-primary">
              Submit
        </button>
        </div>
      

        </div>
       

        </form>
        </div>    
        </div>

       )


  };

  Withdraw.propTypes = {};

  Withdraw.defaultProps = {};

export default Withdraw;

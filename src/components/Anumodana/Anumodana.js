import React, { useState, useEffect } from 'react';
import './Anumodana.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loder from '../Loder';

import flower from '../../assets/flower.png';


const Anumodana = () => {
  const [about, setabout] = useState(null);

  const [Loader, setLoader] = useState(false);
  const [Data, setData] = useState('');
  const {id } = useParams();

  useEffect(() => {
    fetch_data();        
}, []);

async function fetch_data(){
  setLoader(true);
  
  axios.get("https://globalwin.in/j12/api/about_get/1")
  .then(res => {

    setData(res.data.about_us)
    console.log(Data)
    

    setLoader(false);
}).catch(error => {
    console.log('errr', error)
    setLoader(false);
})
}

if (Loader == true) {
  return (
  
      <Loder />
  
  )
  
  }
  return(

      <div className="Anumodana">   
    <center><img className='mt-4'src={flower}></img></center>
      <center><h3 className='mt-4 f1'>परिचय</h3></center>
          <h5 className='text-center f2'>जैन अनुमोदन ग्रुप ,नाशिक </h5> 
          <p className='text-center f3'>{Data.about}</p>   
     </div>

       )


  };

  Anumodana.propTypes = {};

  Anumodana.defaultProps = {};

export default Anumodana;

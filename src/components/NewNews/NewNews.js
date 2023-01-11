import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loder from '../Loder';
import { AiOutlineFieldTime } from 'react-icons/ai';
import {FcHome} from 'react-icons/fc';
import {BiStopwatch} from 'react-icons/bi';
import {BsLaptop} from 'react-icons/bs';
import {GrPersonalComputer} from 'react-icons/gr';
import {ImLocation2} from 'react-icons/im';
import './NewNews.css';





const NewNews = () => {
    const [end, setend] =useState('');
    const [start, setstart] =useState('');

    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const {id } = useParams();



    useEffect(() => {
       
        fetch_data();
             
    }, []);

    
    async function fetch_data(){
        setLoader(true);
        axios.get("https://globalwin.in/j12/api/new_news/"+id)
        .then(res => {
  
          setstart(res.data.start_t)

          setData(res.data.new_new)
          console.log(res.data)
  
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

    <div className="NewNews">

<div className="container">
  <div className="row">
    
  
  {Data != null
          ?
<> 
    <div className="col-12">
      <div className="cardne card">
        <div className="card-body">
        <img className='imn' src={"https://globalwin.in/j12/public/image/"+Data.image}/>
          <h3 className="card-title mt-4">{Data.venu_title}</h3>
          <div className='card-subtitle'>
           <span className="clock_icon"> <BiStopwatch/></span>{start}<br/>
          
           <span className='clock_icon'><ImLocation2/>{Data.venu}</span>{Data.address}
          </div>
          <div>         
          <p className="font-f mt-2">{Data.description}</p>
        
         
          </div>
         
         

        </div>
      </div>
    </div>
  
  </>

  :<></>
  }
    
    
  </div>
</div>

   </div>
     
       

       ) };

       NewNews.propTypes = {};

       NewNews.defaultProps = {};

export default NewNews;

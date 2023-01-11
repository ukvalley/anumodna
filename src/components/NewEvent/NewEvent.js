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
import './NewEvent.css';





const NewEvent = () => {
    const [venu_title, setvenu_title] =useState('');
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
        axios.get("https://globalwin.in/j12/api/new_event/"+id)
        .then(res => {
  
          setstart(res.data.start_t1)
          setend(res.data.start_t2)

          setData(res.data.new_ev)
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

    <div className="NewEvent">

<div className="container">
  <div className="row">
    
  
  {Data != null
          ?
<> 
    <div className="col-12 mt-4">
      <div className="border-primary text-primary">
        <div className="card-body">
        <img className='ima' src={"https://globalwin.in/j12/public/image/"+Data.image}/>
          <h4 className="card-title mt-4">{Data.event_title}</h4>
          <div className='card-subtitle'>
           <span className="clock_icon"> <BiStopwatch/></span>{start}<br/>
           <h4 className="card-title mt-4">{Data.Category}</h4>
           <span className='clock_icon'><ImLocation2/>{Data.address}</span>
          </div>
          <div>         
          <p className="f-text mt-2">{Data.description}</p>
          <p>{Data.status}</p>
         <a className='clock_icon' href={Data.meet}><BsLaptop/>  
         <span className=''>Join Link</span> {Data.meet}
         </a>
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

       NewEvent.propTypes = {};

       NewEvent.defaultProps = {};

export default NewEvent;

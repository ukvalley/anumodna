import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Stavan.css';





const Stavan = () => {
    const [sn, setsn] =useState('');
    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const {id } = useParams();



    useEffect(() => {
    
        fetch_data(); 
             
    }, []);

    

    async function fetch_data(){

       
        setLoader(true);
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        };
        axios.get("https://globalwin.in/j12/api/song_kuku/" + id,config)
        .then(res => {
  
          setsn(res.data.song_l);  
          setData(res.data)
          
          console.log(res.data);
           
          setLoader(false);
      }).catch(error => {
          console.log('errr', error)
          setLoader(false);
      })
      }

      if (Loader == "true") {
        return (
        
            <Loader />
        
        )
        
        }
  return(

    <div className="Stavan">
     
        <div className="container"> 
        <center>
      <div className="mt-5">
        <h4 className='font_s' style={{color: "#0101a5"}}>{sn.song_title}</h4>
        <pre className='font_s'  style={{color: "#2596be", marginBottom:"10px"}}>{sn.song}</pre>
                   
        </div>  
       </center>



        </div> 
        </div>

     
       

       ) };

       Stavan.propTypes = {};

       Stavan.defaultProps = {};

export default Stavan;

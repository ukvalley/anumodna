import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Song.css';
import { MdQueueMusic } from 'react-icons/md';
import Loder from '../Loder';

const Song = () => {
 
    const [song, setesong] =useState(null);
    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const { id } = useParams();
    const [dataget,setgetData]= useState('');
    const [getsong, setgetsong] =useState(null);


   useEffect(() => {
    fetch_data();
}, []);

const handleSubmit = (event) => {
  event.preventDefault();
  search_data(dataget);
}


async function search_data(dataget){
  setLoader(true);
    
  axios.get("https://globalwin.in/j12/api/search_data/"+dataget)
  .then(res => {

   
    setgetsong(res.data.search_stavan);  
    setData(res.data)
    console.log(res.data.search_stavan);

    setLoader(false);
}).catch(error => {
   
    setLoader(false);
})
}

    async function fetch_data(){
        setLoader(true);
        axios.get("https://globalwin.in/j12/api/song_get/"+id)
        .then(res => {

            setesong(res.data.song);
           
            setData(res.data)
           
      
           setLoader(false);

      }).catch(error => {
         
          setLoader(false);
      })
      }
  
      if (Loader == true) {
        return (
        
            <Loder />
        
        )
        
        }
     
  return(

    <div className="Song mt-5 ">
    <form onSubmit={handleSubmit}>
      <div className="search-inner mt-3 inop mb-3 ">
      
          <input type="text"
          className='form-control'
          placeholder='Search in Hindi'
          value={dataget}
           onChange={(e) =>setgetData(e.target.value)} 
            />
          <button className='submit btn btn-primary mt-1'> Search </button>
         
       </div>
       </form>
  
      <div>  
      {getsong != null
          ?
<>
        
        <Link to={"/Stavan/" + getsong.id}>
  <div className="courses-container">
    <div className="course">
   

      <div className="course-preview">
        <div> <MdQueueMusic/> </div>       
      </div>

      <div className="course-info mt-4 ">
       <h6 className="poppinsfont link">  {getsong.song_title}</h6>
      </div>
     
    </div>
  </div>
  </Link>
  {/* SOCIAL PANEL HTML */}
 
 
 

</>

:<></>
}   

      </div>     



    <>
    {song != null
          ?
<>
          {song.map((record, index) => (
            <>
            <Link to={"/Stavan/" + record.id}>
  <div className="courses-container">
    <div className="course">
   

      <div className="course-preview">
        <div> <MdQueueMusic/> </div>       
      </div>

      <div className="course-info mt-4 ">
       <h6 className="poppinsfont link">{index+1}  {record.song_title}</h6>
      </div>
     
    </div>
  </div>
  </Link>
  {/* SOCIAL PANEL HTML */}
 
 
  </>))}

</>

:<></>
}   
</>
 

     </div>    
      

       ) };

       Song.propTypes = {};

       Song.defaultProps = {};

     export default Song;

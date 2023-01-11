import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Category.css';
import Loder from '../Loder';


import m from '../../assets/m.png';


import 'react-slideshow-image/dist/styles.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const delay = ms => new Promise(res => setTimeout(res, ms));




const Category = () => {
    const [song_Category, setesong_Category] =useState(null);
    const [Loader, setLoader] = useState(false);
    const [dataget,setgetData]= useState('');
    const [Data, setData] = useState(null);
    const {id } = useParams();
    const [value, setValue] = useState("");

    useEffect(() => {
        fetch_data();  
           
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      search_data(dataget);
    }

    
    async function search_data(dataget){
      setLoader(true);
        
      axios.get("https://globalwin.in/j12/api/search_data/",+dataget)
      .then(res => {

        setesong_Category(res.data.search_stavan);  
        setData(res.data)
        console.log(res.data)

        setLoader(false);
    }).catch(error => {
        console.log('errr', error)
        setLoader(false);
    })
    }
    async function fetch_data(){
        setLoader(true);
        
        axios.get("https://globalwin.in/j12/api/song_c")
        .then(res => {
  
        setesong_Category(res.data.song_C);  
          setData(res.data)
          console.log(res.data)
  
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

    <div className="Category c"> 
  
 
   <div className="grid-container ">

   {song_Category != null
          ?
<>
          {song_Category.map((record, index) => (
            <>
         
     <Link to={"/Song/" + record.id}>{record.song_Category}<div className="grid-item">
        <img className='card_img_cd' src={m}></img>
     </div><div className="grid-item font_s link">{record.Category}</div></Link>
    
     </>))}

</>

:<></>
}  

     

</div>
    </div>

       )


  };

  Category.propTypes = {};

  Category.defaultProps = {};

export default Category;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profiles.css';
import { Link } from "react-router-dom";
import male from '../../assets/man.png';
import female from '../../assets/woman.png';
import Loder from '../Loder';



const Profiles = () => {
   
    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const {id} = useParams();

 useEffect(() => {
      fetch_data(id);   
    }, []);

 
 
  async function fetch_data(){
      setLoader(true);
      
      axios.get("https://globalwin.in/j12/api/all_profile")
      .then(res => {

      setData(res.data.all_bio);
       
        
        setLoader(false);
    }).catch(error => {
        console.log('errr', error)
        setLoader(false);
    })
    }
    
   
  return(

    <div className="Profiles">
      
       <div className="page-wrappers mt-1">
    
       <div className="col-12 text-center">
       <div className='row'>
       {Data != null
          ?
<>
          {Data.map((record, index) => (
            <>
        <div className='col-md-6 mt-3'>
        <Link to={"/Update_Profile/"+ record.id}>
          <div className="profile-boxs">
          <img className='img_G' src={"https://globalwin.in/j12/public/image/"+record.image}
             alt="profile pic" />
          <h3 className='text-capitalize ff1 link_a'>{record.full_name}</h3>
          <h5 className='text-center'>Age:{record.age}</h5>
         </div>
       </Link>
      </div>
      
      </>))}

</>

:<></>
}  
       </div>
       </div>
       </div>
       </div>           
       

       ) };
      

       Profiles.propTypes = {};

       Profiles.defaultProps = {};

export default Profiles;

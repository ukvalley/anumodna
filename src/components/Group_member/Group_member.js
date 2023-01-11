import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Group_member.css';
import { Link } from "react-router-dom";


const Group_member = () => {

  const [Loader, setLoader] = useState(false);
  const [Data, setData] = useState(null);
  const [image, setImg] = useState('');

  useEffect(() => {
    fetch_data();
}, []);




async function fetch_data() {

  setLoader(true);
  await axios.get("https://globalwin.in/j12/api/user_member")
  .then(res => {
    
   
    setData(res.data.user_data);
    console.log(res.data.user_data);   
      
      setLoader(false);
      
  }).catch(error => {
      console.log('errr', error)
      setLoader(false);
  })
}

if (Loader === "true") {
  <Loader />
}

  return(

    <div className="Group_member">
       
       <div className="page-wrapper">
       <div className="col-12 text-center">
         <div className=" f11 ">ग्रूप्‌  सदस्य</div>
          </div>
       {Data != null
        ?
<>
        {Data.map((record, index) => (
          <>
 <Link to={"/Vcard/" + record.id}> <div className="profile-box">
    <img className='img_G' src={"https://globalwin.in/j12/public/image/"+record.image}
     alt="profile pic" />
    <h3 className='text-capitalize ff1 link_a'>{record.full_name}</h3>
    <h4 className='ff2 link_a'> {record.position}</h4>
   
  </div></Link>
  </>))}

    </>
    
    :<></>
  }
   
  
       </div>



     </div>    
       

       ) };

       Group_member.propTypes = {};

       Group_member.defaultProps = {};

export default Group_member;

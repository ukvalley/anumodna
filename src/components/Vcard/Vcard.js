import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Vcard.css';
import { BsFacebook,BsInstagram } from 'react-icons/bs';
import {AiOutlineMobile,AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';



const Vcard = () => {
    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState('');
    const {id } = useParams();



    useEffect(() => {    
        fetch_data();         
    }, []);

    

    async function fetch_data(){
    
        setLoader(true);       
        axios.get("https://globalwin.in/j12/api/member_about_get/"+id)
        .then(res => {
  
          setData(res.data.user_get);          
          console.log(res.data.user_get);
           
          setLoader(false);
      }).catch(error => {
          console.log('errr',error)
          setLoader(false);
      })
      }

      if (Loader == "true") {
        return (
           <Loader/>
         )
        
        }

        const handleClick = event => {
          var modal = document.getElementById('myModal');
          var img_id = event.currentTarget.id;
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var img = document.getElementById(img_id);
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");
          img.onclick = function(){
              modal.style.display = "block";
              modalImg.src = this.src;
          }
          
          
          // When the user clicks on <span> (x), close the modal
          modal.onclick = function() {
              setTimeout(function() {
                 modal.style.display = "none";                 
               }, 200);
              
           }    
        };
       
  return(

    <div className="Vcard ">
<div className="container">
  <div className="row">
  <div className="column ">
 
  {Data != null
          ?
<> 
        <div className="center cardne">
          <div className='profile_image center_g'>
          <img className="si " 
        src={"https://globalwin.in/j12/public/image/"+Data.image} 
       
        id={"myImg"+Data.image}
        onClick={handleClick}
        alt="Jane"/>
          </div>
       

      <div className="container">
      <div className=''>
      <h6 className='text-capitalize text-center title1  mt-2'>{Data.full_name}</h6>
       <h6 className="title text-center">{Data.position}</h6>  
       </div>
        <ul>
       <a className='facebook slogo text-center'><BsFacebook/></a>
        <a className='insta slogo text-center'><BsInstagram/></a>        
        </ul> 
     
    
      </div>
      <div className='card_color'>       
     <a className="clogo" href={"tel:"+Data.phone_number}><AiOutlineMobile/>{Data.phone_number}</a><br/>           
     </div>

     <div className='card_color'>       
    <a className="clogo" href={"mailto:"+Data.email}><AiOutlineMail/>  {Data.email}</a><br/>     
     </div>

     <div className='card_color'>       
        <a className="clogo"><GoLocation/> {Data.address}</a><br/>              
     </div>
        
    
   

        </div>
       
        <div id="myModal" className="modal">
  <img className="modal-content" id="img01" />
</div>


        </>

:<></>
}   
  </div>
         
    </div>
    </div>
    </div>
     
      

       ) };

       Vcard.propTypes = {};

       Vcard.defaultProps = {};

export default Vcard;

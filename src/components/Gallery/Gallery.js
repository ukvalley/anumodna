import React, { useState, useEffect ,Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loder from '../Loder';
import './Gallery.css';

const Gallery = () => {
    const [img01, setimg01] =useState('');
    const [venu, setvenu] =useState('');

    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const {id } = useParams();



    useEffect(() => {
        console.log("1")
        fetch_data();
             
    }, []);

    
    async function fetch_data(){
        setLoader(true);
        axios.get("https://globalwin.in/j12/api/gallery_photo")
        .then(res => {
  
      
          setData(res.data.gallery_n)
          console.log(res.data)
  
          setLoader(false);
      }).catch(error => {
          console.log('errr', error)
          setLoader(false);
      })
      }
  

      if (Loader == true) {
        return (        
            <Loder/>      
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

    <div className="Gallery">
     <section className="three-column-images">
       <div className='container'>
     
       <div className="row row-cols-1 row-cols-md-3 g-6">
       {Data != null
          ?
<>
          {Data.map((record, index) => (
            <> 
            <div className="column">
  <div className="col">
    <div className="card_g">
      <img src={"https://globalwin.in/j12/public/image/"+record.image} 
      className="card-img-top" 
      alt="..." 
      id={"myImg"+record.image}
      onClick={handleClick}
      />
      <div className="">        
        <p className="font_title">
         {record.title}
        </p>
        <p></p>
      </div>
    </div>
  </div>
  </div>

  <div id="myModal" className="modal">
  <img className="modal-content" id="img01" />
  </div>

  </>))}
</>

:<></>
}
  </div>

 
      </div>

      </section>
    </div>


  
     
       

       ) };

       Gallery.propTypes = {};

       Gallery.defaultProps = {};
      

export default Gallery;

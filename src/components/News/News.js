import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {BiStopwatch} from 'react-icons/bi';

import { Link } from "react-router-dom";
import './News.css';



const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="entry-summary">
      {isReadMore ? text.slice(0,50) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const News = () => {
    const [venu_title, setvenu_title] =useState('');
    const [description, setdescription] =useState('');
    const [venu, setvenu] =useState('');

    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const {id } = useParams();



    useEffect(() => {
       
        fetch_data();
             
    }, []);

    
    async function fetch_data(){
        setLoader(true);
        axios.get("https://globalwin.in/j12/api/news")
        .then(res => {
  
        setvenu_title(res.data.new) 
          setData(res.data.new)
          console.log(res.data)
  
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

    <div className="News">
   <div className="container">
  
   <div className="row row-cols-1 row-cols-md-3">
{Data != null
 ?
<>
 {Data.map((record, index) => (
   <>
<Link to={"/NewNews/" + record.id}> 
<div className="col ">
 <div className="card">
   <img src={"https://globalwin.in/j12/public/image/"+record.image}
    className="card-img-tops" alt="..." />
   <div className="card-body">
     <h5 className="card-title">{record.venu_title}</h5>
     <div className="inner-meta ">
     <span>
       By <a className="created-by">Anumodana Group</a>
     </span>
     <p className="created-at clock_icon3"><BiStopwatch/>{record.daytime}</p>
   </div>
   <div className="entry-summarys">
 <ReadMore>
  {record.description}
  </ReadMore>
 </div>
   </div>
 </div>
</div>
</Link>
</>))}

</>

:<></>
}  
</div>

</div>
   </div>  
       

       ) };

       News.propTypes = {};

       News.defaultProps = {};

export default News;

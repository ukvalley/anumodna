import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loder from '../Loder';
import {BiStopwatch} from 'react-icons/bi';
import './All.css';


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


const All = () => {
    const [all, setall] =useState('');
    const [start, setstart] =useState('');

    const [date, setDate] =useState('');
    const [Loader, setLoader] = useState(false);
    const [Data, setData] = useState(null);
    const {id } = useParams();
    const {type } = useParams();



    useEffect(() => {
       
        fetch_data();
             
    }, [type]);

    
    async function fetch_data(){
        setLoader(true);
        let url = ("https://globalwin.in/j12/api/events/"+type)
        console.log(url);
        axios.get(url)
        .then(res => {
  
          setDate(res.data.date)
          setstart(res.data.start_t)
          setData(res.data.event_all)
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

    <div className="All">
    <div className="container mt-3">
  
    <>
  <nav className="tabs nav">
  <ul className="tabs__items">
    <li>
    <Link to="/All/today"><a className='aba'>Today</a></Link> 
    </li>
    <li>
    <Link to="/All/all"> <a className='aba'>All</a></Link>
    </li>
    <li>
    <Link to="/All/upcoming"><a className='aba'>Upcoming</a></Link>  
    </li>
    <li>
    <Link to="/All/past"> <a className='aba'>Past</a></Link>
    </li>
   
  </ul>
</nav>

  </>

<div className="row row-cols-1 row-cols-md-3">
{Data != null
?
<>
{Data.map((record, index) => (
  <>
<Link to={"/NewEvent/" + record.id}> 
<div className="col ">
<div className="card">
  <img src={"https://globalwin.in/j12/public/image/"+record.image} 
   className="card-img-tops" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{record.event_title}</h5>
    <div className="inner-meta ">
    <span>
      By <a className="created-by">Anumodana Group</a>
    </span>
    <p className="created-at clock_icon3"><BiStopwatch/>{record.starttime}</p>
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
       

       All.propTypes = {};

       All.defaultProps = {};

export default All;

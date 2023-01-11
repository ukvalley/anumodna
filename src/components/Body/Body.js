import React from 'react';
import PropTypes from 'prop-types';

import axios from "axios";
import './Body.css';

const Body = () => {
  return(

    <div className="container">
    
    <div className="Body mt-5">
   <>
    <div className="form-group mt-5">
      <label htmlFor="exampleInputEmail1">Songs Title</label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter Song Title Name"
      />
      
    </div>
    <div className="form-group mt-3">
      <label >Songs Category</label>
      <input
        type="text"
        className="form-control mt-1"
        id="exampleInputPassword1"
        placeholder="Song Category"
      />
    </div>
  
    <label className='mt-4'>Songs </label>
    <div className="form-group form-control ">
    <textarea
    typeof="text"
    id="w3review"
    name="w3review"
    rows={10}
    cols={50}
    
  />
  
    </div>
   
    <button type="submit" className="btn btn-primary mt-4">
      Submit
    </button>
  </>
  </div>
     </div>

  )


  };

Body.propTypes = {};

Body.defaultProps = {};

export default Body;

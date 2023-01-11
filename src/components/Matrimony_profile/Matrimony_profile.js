import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Matrimony_profile.css';
import { Link } from "react-router-dom";
import Loder from '../Loder';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { MultiSelect } from "react-multi-select-component";
import { FaFilter } from 'react-icons/fa';



const Matrimony_profile = () => {


  const [city, Setcity] = useState("");
  const [sakha, setsakha] = useState("");
  const [age, setage] = useState("");
  const [education, seteducation] = useState("");
  const [status, setstatus] = useState("");
  const [house, sethouse] = useState("");

  const [selected_sakha, setSelected_sakha] = useState([]);
  const [selected_city, setSelected_city] = useState([]);

  const [Loader, setLoader] = useState(false);
  const [Data, setData] = useState(null);
  const {id} = useParams();

  const [Filter, SetFilter] = useState(null);

  const [Citylist, SetCitylist] = useState(null);

  const [Agelist, SetAgelist] = useState(null);
  const [Edulist, SetEdulist] = useState(null);
  const [Statuslist, SetStatuslist] = useState(null);
  const [Houselist, Sethouset] = useState(null);
  const [Sakhalist, SetSakhalist] = useState(null);

  const [SakhaOption, SetSakhaOption] = useState(null);
  const [CityOption, SetCityOption] = useState(null);


  const [sakha_name, setsakha_name] = useState(null);
  const [city_name, setcity_name] = useState(null);
  const [age_no, setage_no] = useState(null);
  const [edu_name, setedu_name] = useState(null);
  const [status_name, setstatus_name] = useState(null);
  const [house_name, sethouse_name] = useState(null);

  const {gender } = useParams();

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    handleCitySearch1('a');
}, []);



  const handleSubmit = (event) =>{
    event.preventDefault();
   
    let output = selected_sakha.map(chip => chip.sakha).join(',')
    let output_city = selected_city.map(chip => chip.city).join(',')
    console.log(selected_sakha)
    filter_data1(gender,output_city,age_no,edu_name,status_name,house_name,output);
  }

  const handleCitySubmit = event => {
    Setcity(event.target.value)
   
    
  };

  const handleCitySearch = event => {
    Setcity(event.target.value)
    handleCitySearch1(event.target.value);
   
   };

   async function filter_data1(gender,city_name,age_no,edu_name,status_name,house_name,sakha_name)
   {
   
    setLoader(true);
 
    await axios.get('https://globalwin.in/j12/api/get_candidate?city='+city_name+'&gender='+gender+'&age='+age_no+'&education='+edu_name+'&status='+status_name+'&house='+house_name+'&sakha='+sakha_name)
  
   .then(function (response)
    {
      console.log(response);
    setLoader(false);
    if (response.data.status == "success") {
        Swal.fire({
            title: response.data.message,
            text: 'Data Added Successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
        })
        setData(response.data.get_candidate);
        
    }

    else {
        setLoader(false);
        Swal.fire({
            title: response.data.message,
            text: 'Data Add failed',
            icon: 'error',
            confirmButtonText: 'Okay'
        })
    }
})
.catch(function (error) {
    setLoader(false);
    console.log(error);
    Swal.fire({
        title: error.message,
        text: 'Data Add failed',
        icon: 'error',
        confirmButtonText: 'Okay'
    })
});
}

   async function handleCitySearch1(name) {
    //alert("a");
    setLoader(true);
    await axios.get("https://globalwin.in/j12/api/get_city/"+ gender +"/" +name)
      .then(response => {

        SetCitylist(response.data.get_city1)
        SetAgelist(response.data.get_age)
        SetEdulist(response.data.get_education)
        SetStatuslist(response.data.get_status)
        Sethouset(response.data.get_house)
        SetSakhalist(response.data.get_sakha)
        console.log(response.data.get_city1)

        const sakhaarr = response.data.get_sakha.map((o) => ({
          ...o,
          label: `${o.sakha}`,
          value: `${o.sakha}`,
        }));

         const cityarr = response.data.get_city1.map((o) => ({
          ...o,
          label: `${o.city}`,
          value: `${o.city}`,
        }));

        SetSakhaOption(sakhaarr);
        SetCityOption(cityarr);

      

      // console.log(sakhaarr);

        setLoader(false);
      })
      .catch(error => {
        setLoader(false);
        console.error('There was an error!',error);
      });
}

 useEffect(() => {
      fetch_data();   
    }, [gender]);

 
 
  async function fetch_data(){
      setLoader(true);
      
      axios.get("https://globalwin.in/j12/api/get_candidate?gender="+gender)
      .then(res => {
            
        setData(res.data.get_candidate);
       
        
        setLoader(false);
    }).catch(error => {
        console.log('errr', error)
        setLoader(false);
    })
    }
    
   

    if (Loader == true || Citylist == null || Agelist == null || Edulist == null) {
      return (
         <Loder/> )       
      }

      else
      {

      


  return(

    <div className="Matrimony_profile">
      
       <div className="page-wrappers mt-1">
        
       <div className="col-12 text-center">

       <Popup trigger={<button className='btn btn-primary '><FaFilter/> Filter </button>} modal>
      <>
      <form onSubmit={handleSubmit}>
     <div className="flowers-wrap">
  <p>
    <strong>Filter : </strong>
  </p>
 
 
    <label>Sakha</label>
      <MultiSelect
        options={SakhaOption}
        value={selected_sakha}
        onChange={setSelected_sakha}
        labelledBy="Sakha"
      />  
   <label>City</label>
   <MultiSelect   
        className='mt-2'
        options={CityOption}
        value={selected_city}
        onChange={setSelected_city}
        labelledBy="City"
      />  
   
     <select className='form-control mt-2' 
     onChange={(e) => setage_no(e.target.value)}>
          <option>Select Age</option>  
           {Agelist.map((record, index) => (
                     <>       
          <option value={record.age} >{record.age}</option>
                     </>
            ))}
         </select>
     
   

      <select className='form-control mt-1' onChange={(e) => setedu_name(e.target.value)}>
        <option>Select Education</option>  
     {Edulist.map((record, index) => (
                     <>       
       <option value={record.education}>{record.education}</option>
                     </>
     ))}
     </select>
 
    

  
       
         <select className='form-control mt-2' onChange={(e) => setstatus_name(e.target.value)}>
          <option>Select Status</option>  
           {Statuslist.map((record, index) => (
                     <>       
          <option value={record.status} >{record.status}</option>
                     </>
            ))}
         </select>
     
    
  
         <select className='form-control mt-2' onChange={(e) => sethouse_name(e.target.value)}>
          <option>Select House</option>  
           {Houselist.map((record, index) => (
                     <>       
          <option value={record.house} >{record.house}</option>
                     </>
            ))}
         </select>
     </div>
<button type="submit" className="btn btn-primary mt-5"> Submit</button>
 </form></>
  </Popup>



       </div>

    


 
       <div className="col-12 text-center">
       <div className='row'>
       {Data != null
          ?
<>
          {Data.map((record, index) => (
            <>
        <div className='col-md-6 mt-3'>
        <Link to={"/Full_Profile/"+ record.id}>
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
      }

       Matrimony_profile.propTypes = {};

       Matrimony_profile.defaultProps = {};

export default Matrimony_profile;

import React, { useState, useEffect } from 'react';
import { useParams,useNavigate, } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bio_Data.css';
import Loder from '../Loder';

const Bio_Data = () => {

    const [Loader,setLoader]= useState(false);
    const [Data, setData] = useState(null);
    const [StateData, setStateData] = useState(null);
    const [QulificationData, setQulificationData] = useState(null);
    const { id } = useParams();
    const [daytime, setdaytime] = useState("");

    const  [full_name, setfullname]  = useState("");
    const  [complexion, setcomplexion]  = useState("");
    const  [hight, sethight]  = useState("");
    const  [gender, setgender]  = useState("");
    const  [occupation,setOccupation]  = useState("");

    const  [blood, setblood]  = useState("");
    const  [hobbies, sethobbies]  = useState("");
    const  [education, seteducation]  = useState("");
    const  [qualification, setQulification]  = useState("");
    const  [occupation_details, setOccupation_details]  = useState("");

    const  [status, setStatus]  = useState("");
    
    const  [self, setself]  = useState("");
    const  [mamasa, setmamasa]  = useState("");
    const  [dadisa, setdadisa]  = useState("");
    const  [nanisa, setnanisa]  = useState("");
    const  [grandfather, setgrandfather]  = useState("");
    const  [grandmother, setgrandmother]  = useState("");
    const  [fathername, setfathername]  = useState("");
    const  [mothername, setmothername]  = useState("");
    const  [brothername, setbrothername]  = useState("");
    const  [sistername, setsistername]  = useState("");
    const  [contactnumber, setcontactnumber]  = useState("");
    const  [selfnumber, setselfnumber]  = useState("");
    const  [house , setHouse]  = useState("");
    const  [address, setaddress]  = useState("");
    const  [city, setCity]  = useState("");
    const  [Citylist, SetCitylist]  = useState([]);
    const  [Districtlist, SetDistrictlist]  = useState([]);
    const  [state, setState]  = useState("");

    const  [tahsil, setTahsil]  = useState("");
    const  [dist, setDist]  = useState("");
    const  [image, setimage]  = useState(null);
    const  [selectedFile, setSelectedFile] = React.useState(null);
    const  [isLoggedIn, setLoggedIn] = useState(false);
    const  [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const [authTokens, setAuthTokens] = useState(
      localStorage.getItem("tokens") || ""
    );

    console.log(authTokens);
   
    

    useEffect(() => {
      fetch_data(id); 
         
  }, []);

  

  

   async function handleCitySearch(e) {

    //console.log(e);
    setDist(e.target.value);

    setLoader(true);
    await axios.get("https://globalwin.in/j12/api/get_city_by_district?district_id="+e.target.value)
      .then(response => {

        SetCitylist(response.data.cities)
       
        //console.log(response.data.cities)

        setLoader(false);
      })
      .catch(error => {
        setLoader(false);
        console.error('There was an error!', error);
      });
}


async function handleDistrictSearch(e) {

  //console.log(e);
  setState(e.target.value);

  setLoader(true);
  await axios.get("https://globalwin.in/j12/api/get_district_by_state?state_id="+e.target.value)
    .then(response => {

      SetDistrictlist(response.data.district)
     
      console.log(response.data.district)

      setLoader(false);
    })
    .catch(error => {
      setLoader(false);
      console.error('There was an error!', error);
    });
}

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  
  const fetch_data = async () => {
    await axios.get("https://globalwin.in/j12/api/get_sakha_data")
    .then(res => {

        
      setData(res.data.get_all);   
      setStateData(res.data.get_state_all); 
      setQulificationData(res.data.qualification);
      
      console.log(res.data);

      setLoader(false);
  }).catch(error => {
      console.log('errr', error)
      setLoader(false);
  })
  }


  
   

    const handleSubmit = (event) =>{
        event.preventDefault();
        
       
        if(full_name,daytime,complexion,hight,gender,self,blood,hobbies,
            education,status,mamasa,dadisa,nanisa,grandfather,grandmother,fathername,
            mothername,brothername,sistername,contactnumber,selfnumber,house,city,dist,tahsil,address,selectedFile)
            {         
              bio_data_post(full_name,daytime,complexion,hight,gender,self,blood,hobbies,
            education,status,mamasa,dadisa,nanisa,grandfather,grandmother,fathername,
            mothername,brothername,sistername,contactnumber,selfnumber,house,city,dist,tahsil,address,selectedFile);
        } 
        else {
          Swal.fire({
              title: 'Validation Error',
              text: 'Enter Proper Data',
              icon: 'error',
              confirmButtonText: 'Okay'
          })
      }
       }
       
       async function bio_data_post(full_name,daytime,complexion,hight,gender,self,blood,hobbies,
        education,status,mamasa,dadisa,nanisa,grandfather,grandmother,fathername,
        mothername,brothername,sistername,contactnumber,selfnumber,house,city,dist,tahsil,address,image){

          setLoader(true);

        let f_data = new FormData();
        f_data.append('image', selectedFile);
        f_data.append('full_name', full_name);
        f_data.append('complexion', complexion);
        f_data.append('hight', hight);
        f_data.append('gender', gender);
        f_data.append('blood', blood);
        f_data.append('hobbies', hobbies);
        f_data.append('education', education);
        f_data.append('qualification', qualification);
        f_data.append('occupation', occupation);
        f_data.append('occupation_details', occupation_details);
        f_data.append('nanisa', nanisa);
        f_data.append('mamasa', mamasa);
        f_data.append('dadisa', dadisa);
        f_data.append('self', self);
        f_data.append('status', status);
        f_data.append('fathername', fathername);
        f_data.append('mothername', mothername);
        f_data.append('grandfather', grandfather);
        f_data.append('grandmother', grandmother);
        f_data.append('mothername', mothername);

        f_data.append( 'brothername',brothername);
        f_data.append('sistername',sistername);
        f_data.append('contactnumber',contactnumber);
        f_data.append('selfnumber',selfnumber);
        f_data.append('hous',house);
        f_data.append('address',address);
        f_data.append('state', state);
        f_data.append('city',city);
        f_data.append('dist',dist);
        f_data.append('tahshil',tahsil);
        f_data.append('daytime',daytime);
       
        

       

     
        await axios.post("https://globalwin.in/j12/api/bio_data_post/" + id,
        f_data ,
     { headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data;`,
      }})
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
            navigate('/Matrimony');
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

  return(

    <div className="Bio_Data">
       
    <div className='container'>
        <h1 className='card-title title_size text-center'>Bio-Data Details</h1>

   
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
    <div className="form-group">
    <label>Full Name</label>
    <input
      type="text"
      className="form-control"
      value={full_name}
      onChange={(e) => setfullname(e.target.value)}
      id="full_name"    
      placeholder="Enter Full Name"
    />    
  </div>

  <div className="form-group mt-3">
    <label>Enter Complexion</label>
    <input
      type="text"
      className="form-control"
      value={complexion}
      onChange={(e) => setcomplexion(e.target.value)}
      id="complexion" 
      placeholder="Enter Complexion"
    />
  </div>

  <div className="col-md-6 mt-2">
  <div className="form-group mt-3">
    <label>Enter Birth Date </label>
    
    
    <input
     className="form-control"
     value={daytime} type="date" 
     onChange={(e) => setdaytime(e.target.value)} 
    />
  </div>
  </div>
    
  <div className="form-group mt-3">  
       <label>Select Gender</label>
        <select className='form-control'  
          value={gender}
          onChange={(e) => setgender(e.target.value)}
          id="gender">
        <option>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select>
</div>

<div className="form-group mt-3">
    <label>Enter Hight</label>
    <input
      type="text"
      className="form-control"
      value={hight}
      onChange={(e) => sethight(e.target.value)}
      id="hight" 
      placeholder="Enter Hight"
    />
  </div>

  <div className="form-group mt-3">
    <label>Enter Blood Group</label>
    <input
      type="text"
      className="form-control"
      value={blood}
      onChange={(e) => setblood(e.target.value)}
      id="blood" 
      placeholder="Enter Blood Group"
    />
  </div>

  <div className="form-group mt-3">
    <label>Enter Hobbies</label>
    <input
      type="text"
      className="form-control"
      value={hobbies}
          onChange={(e) => sethobbies(e.target.value)}
          id="hobbies" 
      placeholder="Enter Hobbies"
    />
  </div>

  <div className="row mt-2">
  
      <div className="col-md-6">
        {QulificationData != null
        ?<>
        <div className="form-group">
        <label>Select Qulification</label>
          <select className='form-control'  
            value={qualification}
            onChange={(e) => setQulification(e.target.value)}
            id="qualification">
          <option>Select Qulification</option>
          {QulificationData.map((record, index) => (
            <>
          <option value={record.name}>{record.name}</option>
          </>
        ))}
          </select>
        </div>
        </>
        :<></>
        }
      </div>

     <div className="col-md-6">  
      <div className="form-group">
    <label>Enter Education Details</label>
    <input
      type="text"
      className="form-control"
      value={education}
      onChange={(e) => seteducation(e.target.value)}
      id="education" 
      placeholder="Enter Education Details"
    />
      </div>     
    </div>
    
     
  </div>

  <div className="row mt-2">
  <div className='col-md-6'>
  <div className="form-group mt-3">  
       <label>Select Occupation</label>
        <select className='form-control'  
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          id="occupation">
        <option value="business">Business</option>
        <option value="service">Service</option>
        <option value="other">Other</option>
        </select>
</div>
</div>
     <div className="col-md-6 mt-3">  
      <div className="form-group">
    <label>Enter Qulification Details</label>
    <input
      type="text"
      className="form-control"
      value={occupation_details}
      onChange={(e) => setOccupation_details(e.target.value)}
      id="occupation_details" 
      placeholder="Enter Occupation Details"
    />
      </div>     
    </div>
    
     
  </div>

  <div className="col-md-6 mt-2">
      <div className="form-group">
      <label>Select Status</label>
        <select className='form-control'  
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          id="status">
          <option>Select Status </option>
        <option value="single">Single</option>
        <option value="divorce">Divorce</option>       
        </select>
      </div>
    </div>

    <h5 className='text-title text-center text-center mt-5'>Sakha :- </h5>

    <>
  <div className="col-12">
    <div className="row">
      <div className="col-md-6">
      {Data != null
        ?
    <>        
      <div className="form-group mt-3">  
       <label>Select Self</label>
      <select  className="form-control" 
          value={self}
          onChange={(e) => setself(e.target.value)}
          id="self"  >
              <option>Select Sakha</option>  
          {Data.map((record, index) => (
                <>    
           
            <option value={record.sakha}>{record.sakha}</option> 
               </>
            ))}
        </select>
</div>
</>
  :<></>
}
      </div>

      <div className="col-md-6">
      {Data != null
        ?
    <>        
      <div className="form-group mt-3">  
       <label>Select Mamasa</label>
      <select  className="form-control" 
          value={mamasa}
          onChange={(e) => setmamasa(e.target.value)}
          id="mamasa">
              <option>Select Sakha</option>  
          {Data.map((record, index) => (
                <>            
            <option value={record.sakha}>{record.sakha}</option> 
               </>
            ))}
        </select>
      </div>
</>
  :<></>
}
       </div>

       <div className="col-md-6">
      {Data != null
        ?
    <>        
      <div className="form-group mt-3">  
       <label>Select Dadisa</label>
      <select  className="form-control" 
          value={dadisa}
          onChange={(e) => setdadisa(e.target.value)}
          id="dadisa">
              <option>Select Sakha</option>  
          {Data.map((record, index) => (
                <>   
            
            <option value={record.sakha}>{record.sakha}</option> 
               </>
            ))}
        </select>
</div>
</>
  :<></>
}
       </div>

      <div className="col-md-6">
      {Data != null
        ?
    <>        
      <div className="form-group mt-3">  
       <label>Select Nanisa</label>
      <select  className="form-control" 
          value={nanisa}
          onChange={(e) => setnanisa(e.target.value)}
          id="nanisa">
            <option>Select Sakha</option>  
          {Data.map((record, index) => (
                <>   
            
            <option value={record.sakha}>{record.sakha}</option> 
               </>
            ))}
        </select>
</div>
</>
  :<></>
}
       </div>

    </div>
  </div>

  <h5 className='text-center text-title mt-4'>Family Details :- </h5>

  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label>GrandFather Name</label>
        <input
          type="text"
          className="form-control"
          value={grandfather}
          onChange={(e) => setgrandfather(e.target.value)}
          id="grandfather"
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label>GrandMother Name</label>
        <input
          type="text"
          className="form-control"
          id="grandmother"
          value={grandmother}
          onChange={(e) => setgrandmother(e.target.value)}         
        />
      </div>
    </div>
  </div>
</>
<>

  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label>Father Name</label>
        <input
          type="text"
          className="form-control"
          id="fathername"
          value={fathername}
          onChange={(e) => setfathername(e.target.value)}    
        />
      </div>
    </div>

    <div className="col-md-6">
      <div className="form-group">
        <label>Mother Name</label>
        <input
          type="text"
          className="form-control"
          id="mothername"
          value={mothername}
          onChange={(e) => setmothername(e.target.value)}          
        />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label>Brother Name</label>
        <input
          type="text"
          className="form-control"
          id="brothername"
          value={brothername}
          onChange={(e) => setbrothername(e.target.value)}
          
        />
      </div>
    </div>

    <div className="col-md-6">
      <div className="form-group">
        <label>Sister Name</label>
        <input
          type="text"
          className="form-control"
          id="sistername"
          value={sistername}
          onChange={(e) => setsistername(e.target.value)}
         />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label>Contact Number</label>
        <input
          type="number"
          className="form-control"
          id="contactnumber"
          value={contactnumber}
          onChange={(e) => setcontactnumber(e.target.value)}
           
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label>Self Contact Number</label>
        <input
          type="number"
          className="form-control"
          id="selfnumber"
          value={selfnumber}
          onChange={(e) => setselfnumber(e.target.value)}
        />
      </div>
    </div>
  </div>
 
  <div className="row">
  
    <div className="col-md-6">
      <div className="form-group">
      <label>Select House</label>
        <select className='form-control'  
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          id="house">
         <option>Select House</option>  
        <option value="own">Own</option>
        <option value="rented">Rented</option>
       
        </select>
      </div>
    </div>

    <div className="col-md-6">
      {StateData != null
        ?
    <>        
      <div className="form-group">  
       <label>Select State</label>
      <select  className="form-control"         
        onChange={(e) => handleDistrictSearch(e.target.value,e)}      
          value={state}          
          id="state">
            <option>Select State</option>  
          {StateData.map((record, index) => (
                <>               
            <option key={record.state_id}  value={record.state_title}>{record.state_title}</option> 
               </>
            ))}
        </select>
    </div>
    </>
     :<></>
   }
    </div>
   
 </div>

 
    <div className="row">     
     <div className="col-md-6">
      <div className="form-group">
        <label>District</label>

        <select  className="form-control"         
        onChange={(e) => handleCitySearch(e.target.value,e)}      
          value={dist}          
          id="dist">
            <option>Select District</option>  
          {Districtlist.map((record, index) => (
                <>               
            <option key={record.districtid}  value={record.district_title}>{record.district_title}</option> 
               </>
            ))}
        </select>
       
       
      </div>
    </div>

  <div className="col-md-6">
      {Citylist != null
        ?
    <>        
      <div className="form-group ">  
       <label>Select Tahsil</label>
      <select  className="form-control" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="city">
              <option>Select Tahsil</option>  
          {Citylist.map((record, index) => (
                <>  
       <option value={record.name}>{record.name}</option> 
               </>
            ))}
        </select>
</div>
</>
  :<></>
}
       </div>
   
   

    <div className="col-md-6">
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          className="form-control"
          id="tahsil"
          value={tahsil}
          onChange={(e) => setTahsil(e.target.value)}
         />
      </div>
    </div>

    <div className="col-md-6">
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
         />
      </div>
    </div>
   
   
  </div>
</>

    <div className="form-group mt-3 ml-3">
    <label>File Uploade</label>
    <input type="file"    
    onChange={handleFileSelect}
     id="image" 
    />
    </div>

   
       
  <button type="submit" className="btn btn-primary mt-5">
    Submit
  </button>
        </form>
        </div>
    </div>

  
       

       ) };

       Bio_Data.propTypes = {};

       Bio_Data.defaultProps = {};

export default Bio_Data;

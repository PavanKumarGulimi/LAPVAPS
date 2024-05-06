import axios from "axios";
import './Laptopshow.css'
import React, { useState ,useEffect} from "react";
function Laptopshow() {
    const [data, setdata] = useState([]);
    useEffect(() => {
      axios.get('/api/getdata')
        .then(response => {
          setdata(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
        <div className="lapi-list">
        <div key={data['id']} className="lapi">
          <img src={data.imgurl} alt={data['LapName']} style={ {height: '300px'}}  />
          <h2 style={ {fontSize:"40px", color:"orange"}}>{data['LapName']}</h2>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">Price:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.price}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">Screen Size:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.ScreenSize}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">Screen Resolution:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.ScreenResolution}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">CPU:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.CPU}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">GPU:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.GPU}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">RAM:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.RAM}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">Disk:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.Disk}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">Weight:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.Weight}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">OS:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.OS}</span>
          </p>
           <p>
            <span style={{fontWeight:'bolder', color:'rgb(14, 199, 220)',fontSize:'30px'}}class="price-text">Battery Life:</span>&nbsp;&nbsp; <span style={{fontWeight:'bolder', color:'white',fontSize:'30px'}} class="price-value">{data.Battery}</span>
          </p>

           
          </div> 
        </div>
    );
}

export default Laptopshow;

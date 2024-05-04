import axios from "axios";
import React, { useState } from "react";
function Laptopshow() {
    const [data, setdata] = useState([]);
    axios.get('/api/getdata')
  .then(response => {
    setdata(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    

    return (
        <div>
        <div key={data.id} className="laptop">
          <img src={data.imgurl} alt={data.LapName} style={{height:'200px',width:'250px',marginLeft:'40%'}} />
          <h2 style={{ marginLeft: '30%', marginTop: '10px' }}>{data.LapName}</h2>
           <p style={{ marginLeft: '30%', marginTop: '10px' }}>Price: {data.price}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Screen Size: {data.ScreenSize}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Screen Resolution: {data.ScreenResolution}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>CPU: {data.CPU}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>GPU: {data.GPU}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>RAM: {data.RAM}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Disk: {data.Disk}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Weight: {data.Weight}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>OS: {data.OS}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Battery Life: {data.Battery}</p> 
        </div>
        </div>
    );
}

export default Laptopshow;

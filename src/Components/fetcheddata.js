import './fetcheddata.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Fetcheddata(){
    const [laptops, setNames] = useState([]);
 
  return(
    <div>
      <div className="laptop-list">
        {laptops.map(laptop => (
          <div key={laptop.id} className="laptop">
            <img src={laptop.imgurl} alt={laptop.LapName} style={{ height: '200px',marginLeft:'30%',marginTop:'10px'}}/>
            <h2 style={{ marginLeft:'30%',marginTop:'10px'}}>{laptop.LapName}</h2>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>Price: {laptop.price}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>Screen Size: {laptop.ScreenSize}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>Screen Resolution: {laptop.ScreenResolution}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>CPU: {laptop.CPU}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>GPU: {laptop.GPU}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>RAM: {laptop.RAM}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>Disk: {laptop.Disk}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>Weight: {laptop.Weight}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>OS: {laptop.OS}</p>
            <p style={{ marginLeft:'30%',marginTop:'10px'}}>Battery Life: {laptop.Battery}</p>
          </div>
        ))}
      </div>
      </div>
  );
}
export default Fetcheddata;
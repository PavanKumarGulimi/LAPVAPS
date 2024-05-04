import './Options.css'
import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
function Options() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeHeader, setActiveHeader] = useState(null);
  const headers = [
    "LapName",
    "OS",
    "RAM",
    "GPU",
    "CPU",
    "Disk",
    "ScreenResolution",
  ];
  const options = {
    LapName:["Asus","Dell","Acer","HP","Lenovo","MSI","Gigabyte","Apple","Microsoft","LG"],
    GPU: [
      "INTEL ",
      "AMD ",
      "NVIDIA ",
      "APPLE "
    ],
    RAM: [
      "4 GB", 
      "8 GB",  
      "12 GB", 
      "16 GB", 
      "32 GB", 
      "64 GB",  
      "24 GB", 
      "20 GB", 
      "40 GB"
    ],
    OS: [
      "Windows 11 Home",
      "Windows 11 Pro",
      "Windows 10 Home",
      "Windows 10 Pro",
      "MacOS",
      "Chrome OS",
      "No OS"
    ],
    CPU: [
      "INTEL",
      "AMD",
      "ARM-based Apple"
    ],
    Disk: [
      "16 GB ",
      "32 GB ",
      "64 GB ",
      "128 GB ",
      "256 GB ",
      "512 GB ",
      "1000 GB ",
      "1024 GB ", 
      "2048 GB ",
      "4096 GB ",
      "8192 GB "
    ],
    ScreenResolution: [
      "HD","HD+","FHD","FHD+"
    ]
  };

  const handleHeaderClick = (header) => {
    setActiveHeader(header === activeHeader ? null : header);
  };

  const handleOptionClick = (e, option) => {
    e.stopPropagation();
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
    
  };
  const [laptops, setNames] = useState([]);
  const handleSubmit = async () => {
    try {

      const selectedCheckboxes = Object.keys(selectedOptions).filter(
        (checkbox) => selectedOptions[checkbox]
      );
      const selectedData = selectedCheckboxes.map((checkbox) => ({
        header: headers.find((header) => options[header].includes(checkbox)),
        option: checkbox,
      }));
      const response = await axios.post("/api/names", {
        selectedData,
      });
      const len=(response.data.length);
      if(len===0){
        setNames(response.data);
        // laptops.textContent=" ";
        alert("NO data found");
      }
      else{
        setNames(response.data);
      }
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
  const senddata = async(param) => {
    try {
      console.log(param);
      await axios.post("/api/laptopdata", {
      param,
      });
         }
    catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div>
        <div className="container">
  <div className="left-side">
    <div className="checkbox">
      {headers.map((header) => (
        <div key={header} className="headbox"  onMouseEnter={() => handleHeaderClick(header)}>
          {header} 
          {activeHeader === header && (
            <div className="optionsbox">
              {options[header].map((option) => (
                <div key={option} onClick={(e) => handleOptionClick(e, option)}>
                  <input type="checkbox" id={option} name={option} checked={selectedOptions[option]} readOnly />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className='submitbutton' onClick={handleSubmit}>Submit</button>
    </div>
  </div>
  <div className="right-side">
    <div className="laptop-list">
      {laptops.map(lapi => (
        <div key={lapi.id} className="laptop">
          <button button onClick={() => senddata(lapi.id)} >
           <Link to={'/Laptopshow'} >
          <img src={lapi.imgurl} alt={lapi.LapName} style={{height:'200px',width:'250px',marginLeft:'15px'}} />
          </Link>
          </button >
          {/* {/* <h2 style={{ marginLeft: '30%', marginTop: '10px' }}>{laptop.LapName}</h2> */}
          {/* <p style={{ marginLeft: '30%', marginTop: '10px' }}>Price: {lapi.price}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Screen Size: {lapi.ScreenSize}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Screen Resolution: {lapi.ScreenResolution}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>CPU: {lapi.CPU}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>GPU: {lapi.GPU}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>RAM: {lapi.RAM}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Disk: {lapi.Disk}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Weight: {lapi.Weight}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>OS: {lapi.OS}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Battery Life: {lapi.Battery}</p>  */}
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
  );
}

export default Options;

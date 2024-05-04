import './Options.css'
import React, { useState } from "react";
import axios from "axios";
function ProOptions() {
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
    "ScreenSize",
    "Weight",
    "Battery"
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
    ],
    ScreenSize:[],
    Weight:[],
    Battery:[
        "Less than 5 hours",
        "5 - 8 hours",
        "8 - 11 hours",
        "11 - 14 hours",
        "14+ hours"
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
      const response = await axios.post("/api/Pro", {
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
      {laptops.map(laptop => (
        <div key={laptop.id} className="laptop">
          <img src={laptop.imgurl} alt={laptop.LapName} style={{height:'200px',width:'250px',marginLeft:'15px'}} />
          <h2 style={{ marginLeft: '30%', marginTop: '10px' }}>{laptop.LapName}</h2>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Price: {laptop.price}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Screen Size: {laptop.ScreenSize}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Screen Resolution: {laptop.ScreenResolution}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>CPU: {laptop.CPU}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>GPU: {laptop.GPU}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>RAM: {laptop.RAM}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Disk: {laptop.Disk}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Weight: {laptop.Weight}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>OS: {laptop.OS}</p>
          <p style={{ marginLeft: '30%', marginTop: '10px' }}>Battery Life: {laptop.Battery}</p>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
  );
}

export default ProOptions;

import './BeginOptions.css'
import React, { useState } from "react";
import axios from "axios";
function BeginOptions() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeHeader, setActiveHeader] = useState(null);

  const headers = [
    "Is there any particular Brand of laptop you're interested in???",
    "OS",
    "RAM",
    "GPU",
    "CPU",
    "DisplayType",
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
    DisplayType: [" AMOLED", "LCD", "LED", "OLED"],
    ScreenResolution: [
      "1920x1080",
      "1366x768",
      "1920x1200",
      "2880x1800",
      "2560x1440",
      "2880x1620",
      "3840x2400",
      "2560x1600",
      "3200x2000",
      "3840x2160",
      "3072x1920",
      "3456x2160",
      "1366x912",
      "2256x1504",
      "1600x900",
      "1920x1280",
      "2240x1400",
      "2048x1280",
      "2160x1350",
      "2560x2024",
      "2560x1664",
      "2880x1864",
      "3024x1964",
      "3456x2234", 
      "2736x1824",
      "2400x1600",
      "2496x1664"
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
  return (
    <div>
        <div className="container2">
  <div className="left-side2">
    <div className="checkbox2">
      {headers.map((header) => (
        <div key={header} className="headbox2" onClick={() => handleHeaderClick(header)}>
          {header} 
          {activeHeader === header && (
            <div className="optionsbox2">
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
      {/* <button className='submitbutton2' onClick={handleSubmit}>Submit</button> */}
    </div>
  </div>
  </div>
  </div>
  );
}

export default BeginOptions;

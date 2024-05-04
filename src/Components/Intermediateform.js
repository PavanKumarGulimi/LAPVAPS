import React from 'react';
import './Intermediateform.css';
import Options  from './Options';
import Fetcheddata from "./fetcheddata";
function Intermediateform  (){
          return (
            <div className='parent'>
            <div className="filter-container">
              <Options></Options>
            </div> 
            </div>
          );
} 
export default Intermediateform;
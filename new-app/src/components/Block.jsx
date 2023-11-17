// Block.js

import React from 'react';
// import './Block.css';
import './css/NavBar.css';


const Block = ({ title, logoSrc, onClick }) => {
  return (
    <div className="block">
        <h3 className='title1'>{title}</h3>
      <img className='img' src={logoSrc} alt={title} />
      <p className='title2'>Upto 60% off on Summer Appliances</p>
      <button className="button" onClick={onClick}>
        Grab Now
      </button>
    </div>
  );
};

export default Block;

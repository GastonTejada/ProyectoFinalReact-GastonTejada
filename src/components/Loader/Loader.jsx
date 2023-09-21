import React from 'react';
import './Loader.css'

const Loader = ({loading}) => {
  return(  

    <div className="container">
      <div className="loader"></div>      
      <p className="loading">Loading...  </p>      
    </div>

  )
};

export default Loader;
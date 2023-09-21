import React from 'react';
import './Loader2.css'

const Loader2 = ({loading}) => {
  return(  

    <div className="cnt-loader">
      <div className="loader2"></div>      
      <p className="loading2">Procesando Orden...  </p>      
    </div>

  )
};

export default Loader2;
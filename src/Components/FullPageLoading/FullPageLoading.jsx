import React from 'react';
import './FullPageLoading.css';

const FullPageLoading = ({ loadingMessage }) => {
  return (
    <div className="z-5 page-body">
        <div className="spinner-border text-secondary loading" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div>
            <p className='text-dark fw-bold mt-2'>{loadingMessage}</p>
        </div>
    </div>
    
  )
}

export default FullPageLoading
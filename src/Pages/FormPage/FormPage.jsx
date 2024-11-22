import React, { useState } from 'react';
import { MainForm, Footer, FullPageLoading }  from '../../Components';
import './FormPage.css';

const FormPage = () => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      {isLoading && (
        <FullPageLoading loadingMessage='Please wait, Submitting Form...' />
      )}
      
      <MainForm setIsLoading={setIsLoading} />
      <Footer />
    </>
  )
}

export default FormPage
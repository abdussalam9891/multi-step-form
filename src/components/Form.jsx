import React, { useState } from 'react'
import Personal from './Personal';
import Plan from './Plan';
import Summary from './Summary';
import Addons from './Addons';
import Sidebar from './Sidebar';


const Form = () => {

  const[formData, setFormData] = useState({
    name:"",
    email:"",
    phone: "",
    plan:"monthly",
    addons : []
  })

  const[step, setStep] = useState(1);


  const handleNextStep = () => {
  if (step === 1) {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("All personal fields required");
      return;
    }
  }

  if (step === 2) {
    if (!formData.plan) {
      alert("Please select a plan");
      return;
    }
  }

  setStep(prev => prev + 1);
};

  const handleBack = ()=>{
    setStep(prev => prev - 1);
  }




  return (
    <div className='form-container'>

        {/* Sidebar always visible */}
      <Sidebar currentStep={step} />

      <div className='form-content'>
        {step === 1 &&  <Personal formData={formData} setFormData={setFormData} />}

      {step === 2 && <Plan formData={formData} setFormData={setFormData}/>}
      {step ===3 && <Addons formData={formData} setFormData={setFormData}/>}
      {step === 4 && <Summary formData={formData}/>}

     <div className="buttons">
          {step > 1 && (
            <button onClick={handleBack}>Back</button>
          )}

          {step < 4 && (
            <button onClick={handleNextStep}>
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form

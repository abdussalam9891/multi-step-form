import React, { useState } from 'react'
import Personal from './Personal';
import Plan from './Plan';
import Summary from './Summary';

const Form = () => {

  const[formData, setFormData] = useState({
    name:"",
    email:"",
    phone: "",
    plan:"monthly",
    addons : ""
  })

  const[step, setStep] = useState(1);


  const handleNextStep = ()=>{
    if(step===1 && formData.name===""){
      alert("Name is req")

      return;
    }
    setStep(prev => prev + 1);
  }

  const handleBack = ()=>{
    setStep(prev => prev - 1);
  }




  return (
    <div>
      {step === 1 &&  <Personal formData={formData} setFormData={setFormData} />}

      {step === 2 && <Plan formData={formData} setFormData={setFormData}/>}
      {step === 3 && <Summary formData={formData}/>}

      {step < 2 && <button onClick={handleNextStep} style={{marginTop: "20px"}}>Next Step</button>}

      {step > 1 && <button onClick={handleBack} style={{marginTop: "20px"}}>Back</button>}
      {step===2 && <button onClick={handleNextStep}>submit</button>}
    </div>
  )
}

export default Form

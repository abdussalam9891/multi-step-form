import React, { useState } from 'react'

const Form = () => {

  const[formData, setFormData] = useState({
    personal:{
      name:"",
      email:"",
      phone:""
    },
    plan:{
      type:"",
      billing:"monthly"
    },
    addons: []
  });

  const[errors, setErrors] = useState({
    personal:{},
    plan:{},
    addons:{}
  })

  const[currentStep, setCurrentStep] = useState(1);


// will write later
  const validatePersonal = (data)=>{
    let errors = {}
    if(!data.name.trim()){
      errors.name = "Name required"
    }
    if(!data.email.trim()){
      errors.email =  "Email required"
    }
    return errors
  }

  const validatePlan = ()=>{
    return {}
  }


   const steps = [
    {key: "personal", validator: validatePersonal},
    {key: "plan", validator: validatePlan},
    {key:"addons", validator: null}
  ]

  const updateField = (section, field, value)=>{
    setFormData(prev =>({
    ...prev, [section]:{
      ...prev[section],
      [field]: value
    }

  }))
}

  const nextStep = ()=>{
     const current = steps[currentStep - 1];

     if(!current.validator){
      setCurrentStep(prev => prev +1)
      return
     }

  const stepErrors = current.validator(formData[current.key]);

  setErrors(prev => ({
    ...prev, [current.key]: stepErrors
  }))

  if(Object.keys(stepErrors).length === 0){
    setCurrentStep(prev => prev +1)
  }
}



console.log("STEP:", currentStep)
console.log("DATA:", formData)
console.log("ERRORS:", errors)


  return (

   <div>

      <input
       value={formData.personal.name} onChange={(e)=>updateField("personal", "name", e.target.value)} />

    <button onClick={nextStep}>Next</button>

   </div>

  )
}

export default Form

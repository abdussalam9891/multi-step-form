import React from 'react'

const plans = {
  arcade:{monthly : 9, yearly: 90},
  advanced: {monthly: 12, yearly: 120},
  pro: {monthly: 15, yearly: 150}
};

const Plan = ({formData, updateField}) => {
  return (
    <div>
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>

      {Object.keys(plans).map(plan =>{
        return <button key={plan} onClick={()=> updateField("plan", plan)}>{plan}</button>
      })}

      <button></button>

    </div>
  )
}

export default Plan

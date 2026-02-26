 import React from 'react'



 const Plan = ({formData, setFormData}) => {


  
   return (
     <div>
      <h1>select your plan</h1>
      <p>you have the option of monthly or yearly billing.</p>

       <select
        value={formData.plan}
        onChange={(e) =>
          setFormData({ ...formData, plan: e.target.value })
        }
      >
        <option value="">Choose plan</option>
        <option value="basic">Basic</option>
        <option value="pro">Pro</option>
      </select>


     </div>
   )
 }

 export default Plan

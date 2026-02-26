import React from 'react'

const Summary = ({formData}) => {
  return (
    <div>
      <h1>summary</h1>
      <p>name: {formData.name}</p>
      <p>email: {formData.email}</p>
      <p>phone: {formData.phone}</p>
      <p>plan: {formData.plan}</p>

      <h2>thanks</h2>
    </div>
  )
}

export default Summary

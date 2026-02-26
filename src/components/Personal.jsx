import React from 'react'

const Personal = ({formData, updateField}) => {
  return (
    <div>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>


        <input type="text" value={formData.name} placeholder='Name' onChange={e => updateField(e.target.value)} />
        <input type="email" value={formData.email} placeholder='Email Address' onChange={e => updateField(e.target.value)} />
        <input type="tel"  value={formData.phone} placeholder='Phone Number' onChange={e => updateField(e.target.value)} />

        <button>Next Step</button>

    </div>
  )
}

export default Personal

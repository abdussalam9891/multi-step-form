import React from 'react'

const Personal = ({formData, setFormData}) => {
  return (
    <div>
      <h1>personal info</h1>
      <p>plese enter your name, email, and phone number</p>

      <input type="text" placeholder='name' value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />

      <input type="email" placeholder='email' value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />

      <input type="tel" placeholder='phone' value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
    </div>
  )
}

export default Personal

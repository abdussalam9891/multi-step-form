import React from 'react'

const Personal = ({formData, setFormData}) => {
  return (
    <div className='personal'>
      <h2>personal info</h2>
      <p>plese enter your name, email, and phone number</p>

      <input className='name' type="text" placeholder='name' value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />

      <input className='email' type="email" placeholder='email' value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />

      <input className='phone' type="tel" placeholder='phone' value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
    </div>
  )
}

export default Personal

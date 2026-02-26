import React from 'react'

const addonList = [
  {id: "1", monthly: 1, yearly: 10},
  {id: "2", monthly: 2, yearly: 20},
  {id: "3", monthly: 2, yearly: 20}

];

const Addons = ({formData , updateField}) => {

  const toggleAddon = (id)=>{
    const exists = formData.addons.includes(id);

    if(exists){
      updateField("addons", formData.addons.filter(x => x !== id));
    }else{
      updateField("addons", [...formData.addons, id]);
    }
  }


  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      {addonList.map(item => {
        return (
          <label key={item.id}>
            <input type="checkbox" checked={formData.addons.includes(item.id)} onChange={()=> toggleAddon(item.id)} />
            {item.id}
          </label>
        )
      })}
    </div>
  )
}

export default Addons

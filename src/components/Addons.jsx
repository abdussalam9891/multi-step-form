import {addonsList} from '../data/pricing';

const Addons = ({ formData, setFormData}) => {

  const billing = formData.billing ?? "monthly";
  const period =  billing === "monthly" ? "mo" : "yr";
  const selectedAddons = formData.addons ?? [];


  const handleToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(id)
        ? prev.addons.filter((x) => x !== id)
        : [...prev.addons, id],
    }));
  };

  return (
    <div className="addons-page">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <ul className='addons-list'>
        {addonsList.map((item) => {
        return (

            <li className={`list ${selectedAddons.includes(item.id) ? "active" : ""}`} key={item.id} onClick={()=>handleToggle(item.id)}>
           <div className="list-content">
             <input
              type="checkbox"
              checked={selectedAddons.includes(item.id)}
               readOnly
            />
            <span>
               <p>{item.label}</p>
            <p>{item.desc}</p>
            </span>
           </div>
           <div className="list-bill">
            ${item[billing]}/{period}

           </div>

          </li>

        );
      })}
      </ul>
    </div>
  );
};

export default Addons;

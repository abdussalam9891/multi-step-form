import {addonsList} from '../data/pricing';

const Addons = ({ formData, setFormData}) => {
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

      {addonsList.map((item) => {
        return (
          <li className="list" key={item.id}>
           <div className="list-content">
             <input
              type="checkbox"
              checked={formData.addons.includes(item.id)}
              onChange={() => handleToggle(item.id)}
            />
            <span>
               <p>{item.label}</p>
            <p>{item.desc}</p>
            </span>
           </div>
           <div className="list-bill">
            ${item[formData.billing]}/{formData.plan === "monthly" ? "mo" : "yr"}

           </div>

          </li>
        );
      })}
    </div>
  );
};

export default Addons;

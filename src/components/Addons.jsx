const addonsList = [
  {
    id: "Online",
    label: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
  },
  {
    id: "storage",
    label: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: "profile",
    label: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];

const Addons = ({ formData, setFormData }) => {
  const handleToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(id)
        ? prev.addons.filter((x) => x !== id)
        : [...prev.addons, id],
    }));
  };

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      {addonsList.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={formData.addons.includes(item.id)}
              onChange={() => handleToggle(item.id)}
            />
            <p>{item.label}</p>
            <p>{item.desc}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Addons;

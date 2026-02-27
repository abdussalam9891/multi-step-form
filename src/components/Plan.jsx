import React from "react";
import { plans } from "../data/pricing";



const Plan = ({ formData, setFormData}) => {

  const billing = formData.billing ?? "monthly";
  const period =  billing === "monthly" ?  "mo" : "yr";


  const handleSelect = (plan) => {
    setFormData(prev => ({...prev, plan: plan.name}));
  };

  const toggleBilling = () => {
    setFormData(prev => ({...prev, billing: prev.billing === "monthly" ? "yearly" : "monthly"}));
  };

  return (
    <div className="plan-page">
      <h2>Select your plan</h2>

     <div className="plan">
       {plans.map((item) => (
        <div
        className={`select-plan ${formData.plan === item.name ? "active" : ""}`}
          key={item.name}
          onClick={() => handleSelect(item)}
        >
          <h4>{item.name}</h4>
          <p>
            ${item[billing]}/{period}
          </p>
        </div>
      ))}

     </div>
      <button className="toggle-button-plan" onClick={toggleBilling}>
        Switch to {billing === "monthly" ? "Yearly" : "Monthly"}
      </button>

      <br /><br />


    </div>
  );
};

export default Plan;

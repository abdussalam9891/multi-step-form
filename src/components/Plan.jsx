import React from "react";
import { plans } from "../data/pricing";



const Plan = ({ formData, setFormData}) => {
  const billing = formData.billing || "monthly";

  const handleSelect = (plan) => {
    setFormData({
      ...formData,
      plan: {
        name: plan.name,
        price: billing === "monthly" ? plan.monthly : plan.yearly,
      },
    });
  };

  const toggleBilling = () => {
    const newBilling = billing === "monthly" ? "yearly" : "monthly";

    setFormData({
      ...formData,
      billing: newBilling,
      plan: formData.plan
        ? {
            ...formData.plan,
            price:
              newBilling === "monthly"
                ? plans.find(p => p.name === formData.plan.name).monthly
                : plans.find(p => p.name === formData.plan.name).yearly,
          }
        : null,
    });
  };

  return (
    <div className="plan-page">
      <h2>Select your plan</h2>

     <div className="plan">
       {plans.map((plan) => (
        <div
        className="select-plan"
          key={plan.name}
          onClick={() => handleSelect(plan)}
        >
          <h4>{plan.name}</h4>
          <p>
            ${billing === "monthly" ? plan.monthly : plan.yearly}/
            {billing === "monthly" ? "mo" : "yr"}
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

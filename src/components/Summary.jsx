import React from 'react'
import {plans, addonList} from '../data/pricing';

const Summary = ({ formData, setStep }) => {

   const selectedPlan = plans.find(x => x.name === formData.plan);

   const selectedAddons = addonList.filter(x => formData.addons.includes(x.id));

   const planPrice = selectedPlan[formData.billing];

   const addonsTotal = selectedAddons.reduce((acc, addon) => acc + addon[formData.billing], 0 );

   const total = planPrice + addonsTotal;




  if (!formData.plan) return <p>No plan selected.</p>;


 

   return (
    <div className="summary">
      <h2>Finishing up</h2>

      <div className="summary-box">
        <div className="plan-row">
          <div>
            <h4>
              {formData.plan.name} ({formData.billing})
            </h4>
            <button
              className="change-btn"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <strong>
            ${formData.plan.price}/
            {formData.billing === "monthly" ? "mo" : "yr"}
          </strong>
        </div>

        <hr />

        {addons.map((addon) => (
          <div key={addon.id} className="addon-row">
            <span>{addon.label}</span>
            <span>
              +${addon.price}/
              {formData.billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <span>
          Total (per{" "}
          {formData.billing === "monthly" ? "month" : "year"})
        </span>
        <strong>
          ${total}/
          {formData.billing === "monthly" ? "mo" : "yr"}
        </strong>
      </div>
    </div>
  );
}

export default Summary;




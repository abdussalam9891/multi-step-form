import React from 'react'
import {plans, addonsList} from '../data/pricing';

const Summary = ({ formData, setStep }) => {

  const billing = formData.billing ?? "monthly" ;
  const period = billing === "monthly" ? "mo" : "yr";
  const Addons = formData.addons ?? [];




   const selectedPlan = plans.find(x => x.name === formData.plan);

   const selectedAddons = addonsList.filter(x => Addons.includes(x.id));

   const planPrice = selectedPlan[billing];

   console.log(selectedPlan);
   console.log(formData.plan);

   const addonsTotal = selectedAddons.reduce((acc, addon) => acc + addon[billing], 0 );

   const total = planPrice + addonsTotal;




  




   return (
    <div className="summary">
      <h2>Finishing up</h2>

      <div className="summary-box">
        <div className="plan-row">
          <div>
            <h4>
              {formData.plan} ({billing})
            </h4>
            <button
              className="change-btn"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <strong>
            ${planPrice}/
            {period}
          </strong>
        </div>

        <hr />

        {selectedAddons.map((item) => (
          <div key={item.id} className="addon-row">
            <span>{item.label}</span>
            <span>
              +${item[billing]}/
              {period}
            </span>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <span>
          Total (per{" "}
          {period})
        </span>
        <strong>
          ${total}/
          {period}
        </strong>
      </div>
    </div>
  );
}

export default Summary;




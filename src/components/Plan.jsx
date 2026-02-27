import React from "react";

const plans = [
  { name: "Arcade", monthly: 9, yearly: 90 },
  { name: "Advanced", monthly: 12, yearly: 120 },
  { name: "Pro", monthly: 15, yearly: 150 },
];

const Plan = ({ formData, setFormData, setStep }) => {
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
    <div>
      <h2>Select your plan</h2>

      {plans.map((plan) => (
        <div
          key={plan.name}
          onClick={() => handleSelect(plan)}
          style={{
            border:
              formData.plan?.name === plan.name
                ? "2px solid purple"
                : "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <h4>{plan.name}</h4>
          <p>
            ${billing === "monthly" ? plan.monthly : plan.yearly}/
            {billing === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      ))}

      <button onClick={toggleBilling}>
        Switch to {billing === "monthly" ? "Yearly" : "Monthly"}
      </button>

      <br /><br />

      <button
        disabled={!formData.plan}
        onClick={() => setStep(3)}
      >
        Next
      </button>
    </div>
  );
};

export default Plan;

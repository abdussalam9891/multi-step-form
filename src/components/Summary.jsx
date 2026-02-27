const Summary = ({ formData, setStep }) => {
  const safeData = formData ?? {};
  const addOns = safeData.addons ?? [];

  if (!safeData.plan) return <p>No plan selected.</p>;

  const total =
    safeData.plan.price +
    addOns.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="summary">
      <h2>Finishing up</h2>

      <div className="summary-box">
        <div className="plan-row">
          <div>
            <h4>
              {safeData.plan.name} ({safeData.billing})
            </h4>
            <button
              className="change-btn"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <strong>
            ${safeData.plan.price}/
            {safeData.billing === "monthly" ? "mo" : "yr"}
          </strong>
        </div>

        <hr />

        {addOns.map((addon) => (
          <div key={addon.id} className="addon-row">
            <span>{addon.label}</span>
            <span>
              +${addon.price}/
              {safeData.billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <span>
          Total (per{" "}
          {safeData.billing === "monthly" ? "month" : "year"})
        </span>
        <strong>
          ${total}/
          {safeData.billing === "monthly" ? "mo" : "yr"}
        </strong>
      </div>
    </div>
  );
};

export default Summary;

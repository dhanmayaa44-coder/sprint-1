import { useState } from "react";

function MembershipPlans() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic",
      duration: "1 Month",
      price: "₹1,000",
      features: "Gym Access",
    },
    {
      id: 2,
      name: "Standard",
      duration: "3 Months",
      price: "₹2,500",
      features: "Gym + Cardio",
    },
    {
      id: 3,
      name: "Premium",
      duration: "6 Months",
      price: "₹4,500",
      features: "Gym + Cardio + Trainer",
    },
  ]);

  const addPlan = () => {
    const newPlan = {
      id: plans.length + 1,
      name: `New Plan ${plans.length + 1}`,
      duration: "1 Month",
      price: "₹1,200",
      features: "Gym Access",
    };

    setPlans([...plans, newPlan]);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Membership Plans</h1>
          <p>Manage gym membership plans and pricing</p>
        </div>

        <button className="primary-btn" onClick={addPlan}>
          + Add Plan
        </button>
      </div>

      <div className="plan-grid">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <h2>{plan.name}</h2>

            <h3>{plan.price}</h3>

            <p>{plan.duration}</p>

            <div className="plan-feature">
              ✓ {plan.features}
            </div>

            <button className="plan-btn">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MembershipPlans;
import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function MembershipPlans() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic",
      duration: "1 Month",
      price: "₹1,000",
      features: ["Gym Access"],
    },
    {
      id: 2,
      name: "Standard",
      duration: "3 Months",
      price: "₹2,500",
      features: ["Gym Access", "Cardio Area"],
    },
    {
      id: 3,
      name: "Premium",
      duration: "6 Months",
      price: "₹4,500",
      features: ["Gym Access", "Cardio Area", "Personal Trainer"],
    },
  ]);

  const addPlan = () => {
    const newPlan = {
      id: plans.length + 1,
      name: `New Plan ${plans.length + 1}`,
      duration: "1 Month",
      price: "₹1,200",
      features: ["Gym Access"],
    };

    setPlans([...plans, newPlan]);
  };

  return (
    <div className="plans-page">

      {/* Header */}
      <div className="plans-header">
        <PageTitle
          title="Membership Plans"
          description="Choose and manage the right membership plan for your members"
        />

        <Button onClick={addPlan}>
          + Add Plan
        </Button>
      </div>

      {/* Intro Banner */}
      <div className="plans-banner">
        <div>
          <span>MEMBERSHIP</span>
          <h2>Find the right plan for every fitness goal</h2>
          <p>
            Flexible membership options designed for different
            training needs and durations.
          </p>
        </div>

        <div className="plans-banner-icon">
          💪
        </div>
      </div>

      {/* Plans */}
      <div className="plans-section">

        <div className="section-heading">
          <div>
            <h2>Available Plans</h2>
            <p>Current membership packages</p>
          </div>
        </div>

        <div className="plan-grid">

          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              title={plan.name}
              description={plan.duration}
            >
              <div className="plan-content">

                <div className="plan-price">
                  {plan.price}
                </div>

                <p className="plan-duration">
                  Membership duration
                </p>

                <div className="plan-features">

                  {plan.features.map((feature, featureIndex) => (
                    <div
                      className="plan-feature"
                      key={featureIndex}
                    >
                      <span>✓</span>
                      {feature}
                    </div>
                  ))}

                </div>

                <Button
                  className={
                    index === 2
                      ? "plan-primary-btn"
                      : "plan-secondary-btn"
                  }
                  onClick={() =>
                    alert(`${plan.name} plan selected!`)
                  }
                >
                  Select Plan
                </Button>

              </div>
            </Card>
          ))}

        </div>

      </div>

    </div>
  );
}

export default MembershipPlans;
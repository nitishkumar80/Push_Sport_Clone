import React from "react";
import "./MembershipPlans.css";

const plans = [
  {
    title: "BASIC",
    price: "₹15,000",
    billing: "Quarterly",
    buttonText: "JOIN NOW",
    colorClass: "basic",
  },
  {
    title: "PRO",
    price: "₹24,000",
    billing: "Half-Yearly (Discounted)",
    buttonText: "JOIN NOW",
    colorClass: "pro",
  },
  {
    title: "ELITE",
    price: "₹42,000",
    billing: "Yearly (Discounted)",
    buttonText: "JOIN NOW",
    colorClass: "elite",
  },
];

const MembershipPlans = () => {
  return (
    <div className="pricing-container">
      <h1 className="title">GYM MEMBERSHIP PLANS</h1>
      <p className="subtitle">Choose your fitness journey with the right plan</p>
      <div className="plans-wrapper">
        {plans.map((plan, idx) => (
          <div key={idx} className={`plan-card ${plan.colorClass}`}>
            <h2 className="plan-title">{plan.title}</h2>
            <div className="plan-price">{plan.price}</div>
            <div className="plan-billing">{plan.billing}</div>
            <ul className="features">
              <li>Unlimited Gym Access</li>
              <li>Free Diet Consultation</li>
              <li>Group Classes Included</li>
            </ul>
            <button className="join-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;

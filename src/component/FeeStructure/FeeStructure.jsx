import React, { useState } from 'react';
import './ARSKreedashala.css';

const ARSKreedashala = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const pricingPlans = [
    {
      name: 'Quarterly',
      price: '₹15,000',
      features: ['Unlimited access', '2 sports', 'Basic coaching'],
      popular: false
    },
    {
      name: 'Half-Yearly',
      price: '₹24,000',
      features: ['Unlimited access', '3 sports', 'Priority coaching', '10% discount on merchandise'],
      popular: true
    },
    {
      name: 'Yearly',
      price: '₹42,000',
      features: ['Unlimited access', 'All sports', 'Premium coaching', '15% discount on merchandise', 'Free events access'],
      popular: false
    }
  ];

  return (
    <div className="arskreedashala-container">
    
      {/* Technology Section */}
     

      {/* Membership Plans */}
      <section id="membership" className="arskreedashala-section arskreedashala-membership-section">
        <div className="arskreedashala-container-inner">
          <h2 className="arskreedashala-section-title">Membership Plans</h2>
          <p className="arskreedashala-section-description">
            Choose the plan that fits your athletic goals and budget
          </p>
          
          <div className="arskreedashala-pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`arskreedashala-pricing-card ${plan.popular ? 'arskreedashala-popular-plan' : ''}`}
              >
                {plan.popular && (
                  <div className="arskreedashala-popular-badge">
                    MOST POPULAR
                  </div>
                )}
                <div className="arskreedashala-pricing-card-content">
                  <h3 className="arskreedashala-plan-name">{plan.name}</h3>
                  <p className="arskreedashala-plan-price">{plan.price}</p>
                  <ul className="arskreedashala-plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="arskreedashala-plan-feature">
                        <span className="arskreedashala-feature-check">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`arskreedashala-plan-button ${plan.popular ? 'arskreedashala-popular-button' : ''}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    


 
    </div>
  );
};

export default ARSKreedashala;
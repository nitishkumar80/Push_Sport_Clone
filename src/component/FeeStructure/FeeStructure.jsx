import React, { useState } from 'react';
import './ARSKreedashala.css';

const ARSKreedashala = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sports = [
    { name: 'Cricket', icon: '🏏', color: 'sport-amber' },
    { name: 'Football', icon: '⚽', color: 'sport-emerald' },
    { name: 'Swimming', icon: '🏊', color: 'sport-blue' },
    { name: 'Basketball', icon: '🏀', color: 'sport-orange' },
    { name: 'Badminton', icon: '🏸', color: 'sport-red' },
    { name: 'Gym', icon: '💪', color: 'sport-purple' },
    { name: 'Yoga', icon: '🧘', color: 'sport-teal' },
    { name: 'Table Tennis', icon: '🏓', color: 'sport-cyan' },
  ];

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
      {/* Hero Section */}
      <header className="arskreedashala-header">
        <div className="arskreedashala-nav-container">
        
          
         
          
          {/* Hero Content */}
          <div className="arskreedashala-hero-content">
            <h1 className="arskreedashala-hero-title">Train Like A Champion</h1>
            <p className="arskreedashala-hero-subtitle">
              Revolutionizing sports training with cutting-edge technology and world-class facilities
            </p>
            <div className="arskreedashala-hero-buttons">
              <button className="arskreedashala-primary-button">
                Join Now
              </button>
              <button className="arskreedashala-secondary-button">
                Book Facility
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Waves */}
        <div className="arskreedashala-wave arskreedashala-wave1"></div>
        <div className="arskreedashala-wave arskreedashala-wave2"></div>
        <div className="arskreedashala-wave arskreedashala-wave3"></div>
      </header>

      {/* Sports Section */}
      <section id="sports" className="arskreedashala-section arskreedashala-sports-section">
        <div className="arskreedashala-container-inner">
          <h2 className="arskreedashala-section-title">Our Sports Programs</h2>
          <p className="arskreedashala-section-description">
            Professional training with performance tracking technology for all skill levels
          </p>
          
          <div className="arskreedashala-sports-grid">
            {sports.map((sport, index) => (
              <div 
                key={index}
                className={`arskreedashala-sport-card ${sport.color}`}
              >
                <div className="arskreedashala-sport-icon">{sport.icon}</div>
                <h3 className="arskreedashala-sport-name">{sport.name}</h3>
                <p className="arskreedashala-sport-price">From ₹2,000/month</p>
                <button className="arskreedashala-sport-button">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="arskreedashala-section arskreedashala-tech-section">
        <div className="arskreedashala-container-inner">
          <div className="arskreedashala-tech-content">
            <div className="arskreedashala-tech-image-container">
              <img 
                src="https://img.freepik.com/free-photo/futuristic-ai-dashboard-display_23-2151977856.jpg?t=st=1746721964~exp=1746725564~hmac=160c32c63895bdcd676a9d0e3badf5b8676591178f5a828042ec7c470567925d&w=2000" 
                alt="Wearable Technology" 
                className="arskreedashala-tech-image"
              />
            </div>
            <div className="arskreedashala-tech-text">
              <h2 className="arskreedashala-tech-title">Advanced Performance Tracking</h2>
              <p className="arskreedashala-tech-description">
                Our proprietary SaaS platform combined with wearable devices provides real-time analytics to help athletes optimize their performance.
              </p>
              <ul className="arskreedashala-tech-features">
                <li className="arskreedashala-tech-feature">
                  <span className="arskreedashala-tech-check">✓</span>
                  <span>Real-time biometric monitoring</span>
                </li>
                <li className="arskreedashala-tech-feature">
                  <span className="arskreedashala-tech-check">✓</span>
                  <span>AI-powered performance analysis</span>
                </li>
                <li className="arskreedashala-tech-feature">
                  <span className="arskreedashala-tech-check">✓</span>
                  <span>Personalized training recommendations</span>
                </li>
                <li className="arskreedashala-tech-feature">
                  <span className="arskreedashala-tech-check">✓</span>
                  <span>Progress tracking over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      {/* Facilities Section */}
      <section id="facilities" className="arskreedashala-section arskreedashala-facilities-section">
        <div className="arskreedashala-container-inner">
          <h2 className="arskreedashala-section-title">World-Class Facilities</h2>
          <p className="arskreedashala-section-description">
            68,000 sq. ft. of premium sports infrastructure in Ranchi
          </p>
          
          <div className="arskreedashala-facilities-grid">
            <div className="arskreedashala-facility-card">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Cricket Facility" 
                className="arskreedashala-facility-image"
              />
              <div className="arskreedashala-facility-details">
                <h3 className="arskreedashala-facility-name">Cricket Practice Area</h3>
                <p className="arskreedashala-facility-description">Bowling machines, pitch analysis technology, and professional coaching</p>
              </div>
            </div>
            
            <div className="arskreedashala-facility-card">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Football Facility" 
                className="arskreedashala-facility-image"
              />
              <div className="arskreedashala-facility-details">
                <h3 className="arskreedashala-facility-name">Football Futsal Area</h3>
                <p className="arskreedashala-facility-description">FIFA-approved artificial turf with performance tracking system</p>
              </div>
            </div>
            
            <div className="arskreedashala-facility-card">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Badminton Facility" 
                className="arskreedashala-facility-image"
              />
              <div className="arskreedashala-facility-details">
                <h3 className="arskreedashala-facility-name">Badminton Courts</h3>
                <p className="arskreedashala-facility-description">Olympic-standard courts with motion tracking technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="arskreedashala-section arskreedashala-cta-section">
        <div className="arskreedashala-container-inner">
          <h2 className="arskreedashala-cta-title">Ready to Elevate Your Game?</h2>
          <p className="arskreedashala-cta-subtitle">
            Join ARS Kreedashala today and experience the future of sports training
          </p>
          <button className="arskreedashala-cta-button">
            Book a Free Trial
          </button>
        </div>
      </section>

 
    </div>
  );
};

export default ARSKreedashala;
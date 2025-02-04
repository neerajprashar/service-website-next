import { FaUsers, FaDollarSign, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
   
      <div className="container">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
        <div className="row">
          {/* Trusted Professionals */}
          <div className="col-lg-4">
            <div className="feature-box p-4 shadow-sm rounded bg-white why-choose-us-boxes">
              <FaUsers size={50} className="text-primary mb-3" />
              <h4>Trusted Professionals</h4>
              <p>Our experts are trained, certified, and background-checked.</p>
            </div>
          </div>

          {/* Affordable Pricing */}
          <div className="col-lg-4">
            <div className="feature-box p-4 shadow-sm rounded bg-white why-choose-us-boxes">
              <FaDollarSign size={50} className="text-primary mb-3" />
              <h4>Affordable Pricing</h4>
              <p>We offer competitive prices with no hidden costs.</p>
            </div>
          </div>

          {/* Quick Service */}
          <div className="col-lg-4 ">
            <div className="feature-box p-4 shadow-sm rounded bg-white why-choose-us-boxes">
              <FaClock size={50} className="text-primary mb-3" />
              <h4>Quick Service</h4>
              <p>Fast and efficient service to meet your urgent needs.</p>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default WhyChooseUs;

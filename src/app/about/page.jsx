import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      {/* About Us Section */}
      <section className="about-us-section d-flex align-items-center mb-5">
        <img src="/images/about-us.jpg" alt="About Us" className="img-fluid rounded me-4 w-50" />
        <div>
          <h2 className="mb-3">About Us</h2>
          <p>
            We are dedicated to providing top-notch services with a focus on customer satisfaction and quality.
            Our team of professionals is passionate about delivering exceptional results tailored to your needs.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section d-flex align-items-center mb-5">
        <div>
          <h2 className="mb-3">Our Story</h2>
          <p>
            Founded in [Year], our company started with a vision to make a difference in the industry.
            Over the years, we have grown and evolved, thanks to our commitment to excellence and our valued clients.
          </p>
        </div>
        <img src="/images/our-story.jpg" alt="Our Story" className="img-fluid rounded ms-4 w-50" />

      </section>

      {/* Our Process Section */}
      <section className="our-process-section text-center">
        <h2 className="mb-3">Our Process</h2>
        <div className="process-steps d-flex justify-content-between">
          <div className="step-card p-4 shadow rounded mx-2">
            <h4>1. Consultation</h4>
            <p>
              We begin with an in-depth consultation to understand your requirements and expectations.
            </p>
          </div>

          <div className="step-card p-4 shadow rounded mx-2">
            <h4>2. Planning</h4>
            <p>
              Our team crafts a detailed plan to ensure every aspect of the project is covered.
            </p>
          </div>

          <div className="step-card p-4 shadow rounded mx-2">
            <h4>3. Execution</h4>
            <p>
              We execute the plan with precision and efficiency, keeping you informed throughout the process.
            </p>
          </div>

          <div className="step-card p-4 shadow rounded mx-2">
            <h4>4. Completion</h4>
            <p>
              The project is completed to your satisfaction, ensuring high-quality results and timely delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="hero-section position-relative text-white text-center d-flex align-items-center justify-content-center"
    >
      {/* Dark Overlay */}
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Content */}
      <div className="hero-content position-relative">
        <h1 className="display-4 fw-bold">Professional Services at Your Doorstep</h1>
        <p className="lead">Reliable & Affordable Services for Every Home & Business</p>
        <Link href="/services" className="btn btn-primary btn-lg mt-3">
          Explore Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;

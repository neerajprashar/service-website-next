import Image from "next/image";

const services = [
  {
    image: "/images/electrical-installation.jpg",
    title: "Electrical Installation",
    description: "We provide top-quality electrical installation services for homes and businesses. Safe, efficient, and reliable work guaranteed.",
  },
  {
    image: "/images/electrical-installation.jpg",
    title: "Electrical Repairs",
    description: "Our expert electricians diagnose and repair all electrical faults quickly and efficiently. Your safety is our priority.",
  },
  {
    image: "/images/electrical-installation.jpg",
    title: "Emergency Services",
    description: "24/7 emergency electrical services available for urgent issues. Fast response and expert solutions guaranteed.",
  },
];

const OurServices = () => {
  return (
 
      <div className="container">
        <h2 className="fw-bold mb-2">Our Electrician Services</h2>
        <p className="mb-4">The first use of Lorem ipsum is uncertain, though some have suggested</p>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card serviceCard service-boxes">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={350}
                  height={230}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default OurServices;

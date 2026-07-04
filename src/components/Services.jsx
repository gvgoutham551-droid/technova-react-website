import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

import {
  FaLaptopCode,
  FaRobot,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Modern React websites with premium UI and high performance.",
    },
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      description:
        "AI powered chatbots, automation and intelligent systems.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description:
        "Beautiful Android and cross-platform mobile applications.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description:
        "Scalable cloud deployment with modern infrastructure.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Reliable database architecture for enterprise applications.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Protect your applications with secure coding practices.",
    },
  ];

  return (
    <section className="services" id="service">

      <h2>Our Services</h2>

      <p>
        Everything you need to build, launch and scale your digital business.
      </p>

      <div className="service-grid">

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}

      </div>

    </section>
  );
}

export default Services;
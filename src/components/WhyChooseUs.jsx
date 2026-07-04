import "../styles/WhyChooseUs.css";
import {
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      desc: "Lightning fast websites built with the latest technologies.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Solutions",
      desc: "Security-first development with modern best practices.",
    },
    {
      icon: <FaBrain />,
      title: "AI Powered",
      desc: "Smart automation and AI features for better productivity.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated support whenever you need assistance.",
    },
  ];

  return (
    <section className="why">
      <h2>Why Choose TechNova?</h2>

      <p className="why-subtitle">
        We deliver premium digital experiences using React,
        AI and modern technologies.
      </p>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
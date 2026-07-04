import "./../styles/ServiceCard.css";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card" >

      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Learn More →</button>

    </div>
  );
}

export default ServiceCard;
import "../styles/Testimonials.css";

const reviews = [
  {
    name: "John Anderson",
    role: "CEO, TechCorp",
    review:
      "TechNova transformed our business with an outstanding React application.",
  },
  {
    name: "Sarah Williams",
    role: "Startup Founder",
    review:
      "Professional team, modern UI, and excellent communication throughout the project.",
  },
  {
    name: "David Miller",
    role: "Product Manager",
    review:
      "Their AI solutions helped us automate our workflow and save countless hours.",
  },
];

function Testimonials() { 
  return (
    <section className="testimonials">

      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">

        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>

            <div className="quote">❝</div>

            <p>{review.review}</p>

            <h3>{review.name}</h3>

            <span>{review.role}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
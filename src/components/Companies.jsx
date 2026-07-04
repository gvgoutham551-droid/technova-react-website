import "../styles/Companies.css";

function Companies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "OpenAI",
    "Adobe",
  ];

  return (
    <section className="companies">
      <p className="company-title">
        Trusted by innovative companies worldwide
      </p>

      <div className="company-container">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
import "../styles/Stats.css";

function Stats() {

  const stats = [
    {
      number: "500+",
      title: "Projects Completed",
    },
    {
      number: "10K+",
      title: "Happy Clients",
    },
    {
      number: "99%",
      title: "Success Rate",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="stats">

      <h2>Trusted Around The World</h2>

      <div className="stats-container">

        {stats.map((item,index)=>(
          <div className="stat-card" key={index}>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );

}

export default Stats;
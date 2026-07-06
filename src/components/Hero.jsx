import "../styles/Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
          🚀 Next Generation AI Solutions santhosh punda
        </p>

        <h1>
          Transform Your Business
          <span> With AI & React</span>
        </h1>

        <p className="hero-text">
          We design beautiful websites, intelligent AI applications
          and scalable digital products that help businesses grow
          faster than ever.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Get Started
            <FaArrowRight />
          </button>

          <button className="btn-secondary">
            View Portfolio
          </button>

        </div>

      </div>

      <div className="hero-image">

        <div className="glass-card">
          <h3>AI Dashboard</h3>

          <div className="line"></div>
          <div className="line short"></div>
          <div className="line"></div>

          <div className="circle"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
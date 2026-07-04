import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>TechNova</h2>

          <p>
            We build modern React applications,
            AI solutions and scalable digital products
            for businesses around the world.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaGithub /></a>

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 TechNova. Built with React ❤️
      </p>

    </footer>
  );
}

export default Footer;
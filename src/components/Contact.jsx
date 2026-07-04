import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <h2>Let's Build Something Amazing 🚀</h2>

        <p>
          Have an idea or project in mind? We'd love to hear from you.
          Send us a message and we'll get back to you soon.
        </p>

        <div className="contact-info">

          <div>
            <FaEnvelope />
            <span>contact@technova.com</span>
          </div>

          <div>
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div>
            <FaMapMarkerAlt />
            <span>Mangalore, Karnataka</span>
          </div>

        </div>

      </div>

      <div className="contact-right">

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
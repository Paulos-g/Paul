import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const service_id = "service_0uj7sj7";
const template_id = "template_fn60bhd";
const public_key = "TaKOFcn5usViS-seA";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        service_id,
        template_id,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        public_key,
      );

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="contact-section">
      <h1 className="contact-title">Say Hi, Don't Be Shy</h1>

      <div className="contact-container">
        {/* Left Side Contact Info & Socials */}
        <div
          className="info-column"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="info-card">
            <div className="icon-wrapper">
              <FaEnvelope size={18} />
            </div>
            <div>
              <h3>Email</h3>
              <p>paulosgirmachew28@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <FaPhoneAlt size={16} />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+251967175052</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <FaMapMarkerAlt size={18} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Addis Abeba, Ethiopia</p>
            </div>
          </div>

          <div className="socials-section">
            <h2>Connect With Me</h2>
            <div className="socials-cont">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Portfolio"
              >
                <FaGlobe size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form Box */}
        <div
          className="form-column"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name here"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can I help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

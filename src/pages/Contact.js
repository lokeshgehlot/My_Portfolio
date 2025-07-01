import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or connect with me on LinkedIn/GitHub!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gehlot-lokesh/" target="_blank" rel="noreferrer">linkedin.com/in/your-linkedin</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/lokeshgehlot" target="_blank" rel="noreferrer">github.com/yourusername</a></p>
      </div>
    </section>
  );
}

export default Contact;

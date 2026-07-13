import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const maxChars = 200;

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setSubmitted(true);
    }
  }

  function handleReset() {
    setName("");
    setMessage("");
    setSubmitted(false);
  }

  return (
    <div className="page-container">
      <section className="section">
        <h2 className="section-title">Contact Me</h2>

        {submitted ? (
          <div className="success-box">
            <p className="success-text">Thanks, {name}! Your message has been received.</p>
            <button className="btn" onClick={handleReset}>
              Send Another
            </button>
          </div>
        ) : (
          <>
            <div className="help-row">
              <button
                className="help-toggle"
                onClick={() => setShowHelp(!showHelp)}
              >
                {showHelp ? "Hide Help ▲" : "Need Help? ▼"}
              </button>
            </div>

            {showHelp && (
              <div className="help-box">
                <p>
                  Fill out the form below to get in touch. Your name and
                  message are required. I will respond within 24 hours.
                </p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  placeholder="Write your message here..."
                  value={message}
                  maxLength={maxChars}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span className="char-count">
                  {message.length} / {maxChars} characters
                </span>
              </div>

              <button
                className="btn"
                type="submit"
                disabled={!name.trim() || !message.trim()}
              >
                Send Message
              </button>
            </form>

            {message && (
              <div className="live-preview">
                <h3>Live Preview</h3>
                <p className="preview-text">{message}</p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default Contact;

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Button from "./ui/Button";
import RoyalSeal from "./ui/RoyalSeal";

// Business WhatsApp number to receive enquiries, in international format
// with no "+", no spaces, no leading zero — e.g. 91 98979 52108 -> 919897952108
const WHATSAPP_NUMBER = "919897952108";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  eventDate: "",
  eventType: "",
  message: "",
};

export default function Enquiry() {
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const lines = [
      "New Enquiry — Ashirwad Celebration Farm",
      "",
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      form.phone && `Phone: ${form.phone}`,
      form.eventDate && `Event Date: ${form.eventDate}`,
      form.eventType && `Type of Event: ${form.eventType}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setForm(initialForm);
  }

  return (
    <section className="enquiry" id="enquiry">
      <div className="enquiry-inner">
        <motion.div
          className="enquiry-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <RoyalSeal size={70} spin={false} />
          <span className="eyebrow eyebrow-light">Plan Your Celebration</span>
          <h2>Book Your Session</h2>
          <p>
            Submit an enquiry and our team will help you design a celebration
            worthy of royalty.
          </p>

          <div className="enquiry-contact">
            <div>
              <MapPin size={18} />
              <span>Laxmipur, opp. Tea Garden, Premnagar, Dehradun, Uttarakhand, India</span>
            </div>
            <div>
              <Phone size={18} />
              <span>+91 98979 52108 &nbsp;|&nbsp; +91 94581 76221</span>
            </div>
          </div>

          <div className="enquiry-map">
            <iframe
              title="Ashirwad Celebration Farm location"
              src="https://maps.google.com/maps?q=Laxmipur%2C%20opp.%20Tea%20Garden%2C%20Premnagar%2C%20Dehradun%2C%20Uttarakhand%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          className="enquiry-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name *</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name *</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="eventDate">Event Date *</label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                value={form.eventDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="eventType">Type of Event</label>
            <select
              id="eventType"
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Weddings and Wedding Receptions</option>
              <option>Engagement Parties</option>
              <option>Birthday Parties</option>
              <option>Family Reunions and Get-Togethers</option>
              <option>Anniversary Celebrations</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
            <MessageCircle size={18} />
            Send Enquiry on WhatsApp
          </Button>

          <p className="enquiry-form-note">
            This opens WhatsApp with your details filled in — just tap send.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

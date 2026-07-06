import { motion } from "motion/react";
import Tilt from "./ui/Tilt";
import posterImg from "../assets/venue/package-poster.jpeg";

export default function PackagePoster() {
  return (
    <section className="poster-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow eyebrow-dark">At a Glance</span>
        <h2>Our Packages &amp; Services</h2>
      </motion.div>

      <motion.div
        className="poster-frame"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Tilt intensity={6} scale={1.01}>
          <img
            src={posterImg}
            alt="Ashirwad Celebration Farm packages and services — 1 Day ₹1,40,000, 2 Days ₹2,40,000, 3 Days ₹3,40,000, with full facility list and contact details"
            className="poster-image"
          />
        </Tilt>
      </motion.div>
    </section>
  );
}

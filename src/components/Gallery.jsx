import { motion } from "motion/react";
import Tilt from "./ui/Tilt";
import PhotoFrame from "./ui/PhotoFrame";
import m1 from "../assets/gallery/moment-1.avif";
import m2 from "../assets/gallery/moment-2.avif";
import m3 from "../assets/gallery/moment-3.avif";
import m4 from "../assets/gallery/moment-4.avif";
import m5 from "../assets/gallery/moment-5.avif";
import m6 from "../assets/gallery/moment-6.avif";

const moments = [
  { img: m1, caption: "Royal Indian Wedding" },
  { img: m2, caption: "Luxury Banquet" },
  { img: m3, caption: "Sacred Ceremony" },
  { img: m4, caption: "Romantic Setting" },
  { img: m5, caption: "Grand Celebration" },
  { img: m6, caption: "Royal Accommodation" },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow eyebrow-dark">Gallery</span>
        <h2>Moments at Ashirwad</h2>
      </motion.div>

      <div className="gallery-grid">
        {moments.map((m, i) => (
          <motion.div
            key={m.caption}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
          >
            <Tilt intensity={10} scale={1.03}>
              <PhotoFrame src={m.img} alt={m.caption} caption={m.caption} className="gallery-photo" />
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

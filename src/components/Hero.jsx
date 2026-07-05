import { motion } from "motion/react";
import Tilt from "./ui/Tilt";
import RoyalSeal from "./ui/RoyalSeal";
import Button from "./ui/Button";
import PhotoFrame from "./ui/PhotoFrame";
import heroImg from "../assets/venue/hero-aerial.avif";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <PhotoFrame src={heroImg} alt="Aerial view of Ashirwad Celebration Farm at dusk" className="hero-bg" />
      <div className="hero-veil" />

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="hero-tilt-wrap">
          <Tilt intensity={18} scale={1.03} className="hero-seal">
            <RoyalSeal size={180} />
          </Tilt>
        </motion.div>

        <motion.span variants={item} className="eyebrow eyebrow-light">
          Laxmipur · Dehradun
        </motion.span>

        <motion.h1 variants={item}>
          Where Memories Are
          <br />
          <em>Made Forever</em>
        </motion.h1>

        <motion.p variants={item} className="hero-sub">
          Seven bigha of lush green lawn in the hills of Dehradun — a royal
          stage for your Indian wedding, curated down to the last detail.
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <Button href="#enquiry" variant="gold" size="lg">
            Book Your Date
          </Button>
          <Button href="#packages" variant="bright" size="lg">
            View Packages
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

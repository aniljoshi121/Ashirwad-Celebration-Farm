import { motion } from "motion/react";
import RoyalSeal from "./ui/RoyalSeal";

export default function Intro() {
  return (
    <section className="intro">
      <motion.div
        className="intro-seal"
        initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <RoyalSeal size={56} spin={false} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        The Heart of Your Celebration
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Nestled in the serene hills of Laxmipur, our 7 bigha lush green lawn
        offers a sanctuary of luxury and romance. We provide a grand stage
        for your royal Indian wedding and family celebrations, where every
        detail is curated to create timeless memories in the heart of
        Dehradun.
      </motion.p>

      <motion.div
        className="intro-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div>
          <strong>7 Bigha</strong>
          <span>Green Lawn</span>
        </div>
        <div className="divider" />
        <div>
          <strong>400</strong>
          <span>Banquet Guests</span>
        </div>
        <div className="divider" />
        <div>
          <strong>200</strong>
          <span>Vehicle Parking</span>
        </div>
        <div className="divider" />
        <div>
          <strong>40</strong>
          <span>Dormitory Guests</span>
        </div>
      </motion.div>
    </section>
  );
}

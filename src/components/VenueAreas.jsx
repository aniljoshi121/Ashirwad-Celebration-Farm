import { motion } from "motion/react";
import PhotoFrame from "./ui/PhotoFrame";
import accommodationImg from "../assets/venue/accommodation-new.avif";
import banquetImg from "../assets/venue/banquet-lawn.avif";
import poolsideImg from "../assets/venue/poolside.avif";
import lawnImg from "../assets/venue/lawn-new.avif";
import vediImg from "../assets/venue/vedi-new.avif";

const areas = [
  { title: "Luxurious Accommodations", img: accommodationImg, desc: "Premium AC and Non-AC rooms designed for a royal stay, ensuring comfort for your cherished wedding guests." },
  { title: "Spacious Banquet Hall", img: banquetImg, desc: "Our royal hall comfortably hosts 400 guests, offering a premium and interactive space for grand family galas." },
  { title: "Scenic Poolside Area", img: poolsideImg, desc: "A refreshing poolside setting ideal for sun-drenched Mehendi ceremonies or a vibrant cocktail hour with family." },
  { title: "7 Bigha Lawn & Stage", img: lawnImg, desc: "An expansive green landscape featuring a grand stage, perfect for large-scale outdoor weddings and high-energy festivities." },
  { title: "Traditional Temple & Vedi", img: vediImg, desc: "Sacred spaces meticulously crafted for traditional union rituals, blending spirituality with the grandeur of your wedding." },
];

export default function VenueAreas() {
  return (
    <section className="venue-areas" id="venue">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow eyebrow-dark">Explore Our Venue</span>
        <h2>Every Corner, Curated for Celebration</h2>
      </motion.div>

      {areas.map((area, i) => {
        const reverse = i % 2 === 1;
        return (
          <div className={`venue-row ${reverse ? "venue-row-reverse" : ""}`} key={area.title}>
            <motion.div
              className="venue-row-media"
              initial={{ opacity: 0, x: reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <PhotoFrame src={area.img} alt={area.title} caption={area.title} className="venue-photo" />
            </motion.div>
            <motion.div
              className="venue-row-text"
              initial={{ opacity: 0, x: reverse ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <span className="venue-index">0{i + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}

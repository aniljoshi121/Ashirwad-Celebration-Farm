import { motion } from "motion/react";
import {
  Trees,
  Waves,
  Flame,
  ChefHat,
  BedDouble,
  CarFront,
  PartyPopper,
  Building2,
  Bed,
} from "lucide-react";
import Tilt from "./ui/Tilt";

const facilities = [
  { icon: Trees, name: "7 Bigha Lawn", note: "Extra Charge Facility", desc: "Our expansive, sun-drenched green space perfect for dynamic outdoor celebrations and custom family events." },
  { icon: Waves, name: "Sparkling Swimming Pool", note: "Extra Charge Facility", desc: "Dive into fun! Add our crystal-clear pool to your celebration for a splash-tastic family experience." },
  { icon: Flame, name: "Vedi & Temple", desc: "Sacred spaces crafted for your union rituals, creating timeless memories for the whole family." },
  { icon: ChefHat, name: "Large Kitchen", desc: "Professional culinary facilities ready to host interactive live-catering for your big family events." },
  { icon: BedDouble, name: "Dormitories", desc: "Vibrant group stay options for up to 40 guests, perfect for a lively family getaway during celebrations." },
  { icon: CarFront, name: "Parking", desc: "Spacious parking for up to 200 vehicles, accommodating grand arrivals for your entire wedding party." },
  { icon: PartyPopper, name: "Banquet Hall", desc: "A grand hall for 400 people, offering an interactive space for elegant dinners and family celebrations." },
  { icon: Building2, name: "Accommodation", desc: "Premium AC and Non-AC rooms with double beds, providing a royal stay for your nearest and dearest family members." },
  { icon: Bed, name: "Additional Beddings", desc: "Extra beddings for up to 100 guests, ensuring a cozy stay for the ultimate family celebration." },
];

export default function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow eyebrow-dark">Facilities &amp; Add-ons</span>
        <h2>Craft a Truly Custom Celebration</h2>
        <p className="section-lede">
          Royal amenities and flexible venue upgrades for your special event.
        </p>
      </motion.div>

      <div className="facility-grid">
        {facilities.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
          >
            <Tilt intensity={6} scale={1.02} className="h-full">
              <div className="facility-card">
                <f.icon size={26} strokeWidth={1.5} color="var(--maroon)" />
                <h3>{f.name}</h3>
                {f.note && <span className="facility-note">{f.note}</span>}
                <p>{f.desc}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

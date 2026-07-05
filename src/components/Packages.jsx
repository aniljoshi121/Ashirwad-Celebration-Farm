import { motion } from "motion/react";
import Tilt from "./ui/Tilt";
import Button from "./ui/Button";
import RoyalSeal from "./ui/RoyalSeal";

const packages = [
  {
    name: "1 Day Celebration",
    price: "₹1,40,000",
    description:
      "The perfect introduction to our farm. Includes a traditional ceremony and reception.",
    featured: false,
  },
  {
    name: "2 Day Grandeur",
    price: "₹2,40,000",
    description:
      "A royal experience with two days of festivities, including a grand banquet hall.",
    featured: true,
  },
  {
    name: "3 Day Royal Suite",
    price: "₹3,40,000",
    description:
      "The ultimate luxury package for a long-lasting celebration with premium facilities.",
    featured: false,
  },
];

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow eyebrow-dark">Wedding Packages</span>
        <h2>Experience the Grandeur of a Royal Celebration</h2>
      </motion.div>

      <div className="package-grid">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          >
            <Tilt intensity={8} scale={1.015} className="h-full">
              <div className={`package-card ${pkg.featured ? "package-card-featured" : ""}`}>
                {pkg.featured && (
                  <div className="package-badge">
                    <RoyalSeal size={40} spin={false} />
                    <span>Most Chosen</span>
                  </div>
                )}
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <p>{pkg.description}</p>
                <Button
                  href="#enquiry"
                  variant={pkg.featured ? "gold" : "outline-dark"}
                  size="sm"
                  className="mt-6"
                >
                  View Inclusions
                </Button>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="package-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Special Packages Available &nbsp;·&nbsp; Exclusive Wedding Rates
        &nbsp;·&nbsp; Premium Banquet Hall &nbsp;·&nbsp; Luxury Dormitories
      </motion.p>
    </section>
  );
}

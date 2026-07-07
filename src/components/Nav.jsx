import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const links = [
  { href: "#packages", label: "Packages" },
  { href: "#facilities", label: "Facilities" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#enquiry", label: "Contact" },
];

// Mobile menu closing (height animating to 0) was racing against the
// browser's native #anchor jump, so the page scrolled to the wrong spot
// or not at all. Fix: intercept the click, close the menu first, then
// scroll to the target manually once the collapse animation is done.
const MENU_CLOSE_MS = 320;

export default function Nav() {
  const [open, setOpen] = useState(false);

  function handleMobileLinkClick(e, href) {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, MENU_CLOSE_MS);
  }

  return (
    <motion.header
      className="nav"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          Ashirwad Celebration Farm
          <span className="nav-brand-sub">(Himalayan Swimming Pool Compound)</span>
          <span className="nav-brand-address">
            Laxmipur, opp. Tea Garden, Premnagar, Dehradun, Uttarakhand
          </span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Button href="#enquiry" variant="gold" size="sm" className="nav-cta-desktop">
            Book Your Date
          </Button>

          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="nav-mobile-links">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleMobileLinkClick(e, l.href)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <Button
              href="#enquiry"
              variant="gold"
              size="sm"
              className="nav-mobile-cta"
              onClick={(e) => handleMobileLinkClick(e, "#enquiry")}
            >
              Book Your Date
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

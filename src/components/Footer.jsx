import RoyalSeal from "./ui/RoyalSeal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <RoyalSeal size={44} spin={false} />
          <div>
            <strong>Ashirwad Celebration Farm</strong>
            <span>Where Memories Are Made Forever</span>
          </div>
        </div>

        <div className="footer-contact">
          <span>Laxmipur, opp. Tea Garden, Premnagar, Dehradun</span>
          <span>98979 52108 &nbsp;|&nbsp; 94581 76221</span>
        </div>

        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Ashirwad Celebration Farm</span>
          <span className="footer-tagline">Designed for Royalty</span>
        </div>
      </div>
    </footer>
  );
}

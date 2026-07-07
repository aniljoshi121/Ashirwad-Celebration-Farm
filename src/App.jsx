import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import PackagePoster from "./components/PackagePoster";
import Packages from "./components/Packages";
import Facilities from "./components/Facilities";
import VenueAreas from "./components/VenueAreas";
import Gallery from "./components/Gallery";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Intro />
      <PackagePoster />
      <Packages />
      <Facilities />
      <VenueAreas />
      <Gallery />
      <Enquiry />
      <Footer />
    </div>
  );
}

export default App;

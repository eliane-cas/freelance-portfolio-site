import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import WhyWebsiteSection from "./sections/WhyWebsiteSection";
import ServicePackages from "./sections/ServicePackages";
import MyWork from "./sections/MyWork";
import HowWeWork from "./sections/HowWeWork";
import FAQs from "./sections/FAQs";
import ContactForm from "./sections/ContactForm";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyWebsiteSection />
      <ServicePackages />
      <MyWork />
      <HowWeWork />
      <FAQs />
      <ContactForm />
    </div>
  );
}

export default App;

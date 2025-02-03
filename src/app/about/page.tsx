import AboutUs from "../components/aboutUs";
import Footer from "../components/footer";
import Header from "../components/header";
import Info from "../components/info";

function About() {
    return (
      <div>
        <div className="relative min-h-[150px] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/layy.jpg')", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}
          >
          <Header />
        </div>
          <AboutUs />
          <Info />
          <Footer />
      </div>
    );
  }
  
  export default About;
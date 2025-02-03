import Footer from "../components/footer";
import Header from "../components/header";
import Info from "../components/info";
import Map from "../components/map";

function Contact() {
    return (
      <div>
        <div className="relative min-h-[150px] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/layy.jpg')", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}
          >
          <Header />
        </div>
          <Map />
          <Info />
          <Footer />
      </div>
    );
  }
  
  export default Contact;
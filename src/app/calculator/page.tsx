import AboutUs from "../components/aboutUs";
import Footer from "../components/footer";
import Header from "../components/header";
import Info from "../components/info";
import MirrorCalculator from "../components/mirrorCalculator";

function Calculator() {
    return (
      <div>
                <div className="relative min-h-[150px] bg-cover bg-center overflow-hidden"
          style={{ backgroundColor: "#000000", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}
          >
          <Header />
        </div>
        <MirrorCalculator />
        <Info />
        <Footer />
      </div>
    );
  }
  
export default Calculator;
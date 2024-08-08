import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import PreFooter from "../component/Pre-Footer";
import SayNo from "../component/SayNo";
import SecureNetwork from "../component/SecureNetwork";

const Home = () => {
  return (
    <div className="font-figtree">
      <Navbar />
      <Banner />
      <SayNo />
      <SecureNetwork />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;

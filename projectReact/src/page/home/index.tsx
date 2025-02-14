import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Mastermenu from "../tampilan/master-menu";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Mastermenu />
      <Footer />
    </>
  );
};

export default Home;

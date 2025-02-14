import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Mastermenu from "../tampilan/master-menu";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Mastermenu />
      <div className="mt-16 w-full min-h-[100vh] flex justify-center"></div>
      <Footer />
    </>
  );
};

export default Home;

import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import MenuNavigation from "../../components/ui/menu-navigation";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <MenuNavigation />
      <div className="mt-16 w-full min-h-[100vh] flex justify-center"></div>
      <Footer />
    </>
  );
};

export default Home;

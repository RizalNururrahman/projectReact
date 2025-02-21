import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/navbar";
import FormMastermenu from "../../../components/ui/form_mastermenu";
import MenuNavigation from "../../../components/ui/menu-navigation";

const MasterMenu: React.FC = () => {
  return (
    <>
      <div className="-mb-48">
        <Navbar />
        <MenuNavigation />
      </div>
      <div className="pl-[38vh]">
        <FormMastermenu />
        <div className="mt-16 w-full min-h-[100vh] flex justify-center"></div>
      </div>
      <Footer />
    </>
  );
};

export default MasterMenu;

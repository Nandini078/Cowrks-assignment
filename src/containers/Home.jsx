
import BuiltForEnterprises from "../components/BuiltForEnterprises/BuiltForEnterprises";
import Footer from "../components/Footer";
import ImageOverlay, { ImgComponent } from "../components/ManageWorkSpaceImg/ImgComponent";
import CostEffectiveComponent from "../components/costEffective/CostEffective";
import DesignBuildRunComponent from "../components/designBuildRunComponent/DesignBuildRunComponent";
import EnquireNow from "../components/enquire/EnquireNow";
import FormQuestions from "../components/formQuestions/FormQuestions";
import ManagedOffice from "../components/managedOffices/managedOffice";
import './Container.css';
import { HeaderComponent } from "./HeaderComponent";

const Home = () =>{
    return(
        <div className="home-layout">
            <header className="header-layout">
                <HeaderComponent />
            </header>
            <main className="body-layout">
               <div className="container-custom-padding">
               <ImgComponent />
               <EnquireNow />
               <BuiltForEnterprises />
               <CostEffectiveComponent />
               <ManagedOffice videoUrl="https://www.youtube.com/watch?v=INaI9mrpftQ&t=87s"/>
               </div>
               <div className="bgrnd-color-layout">
                    <div className="bgrnd-color-child">
                        <DesignBuildRunComponent />
                    </div>
               </div>
               <div className="container-custom-padding">
               <FormQuestions />
               </div>
            </main>
            <footer className="footer-layout">
                <Footer />
            </footer>
        </div>
    )
}

export default Home;
import Hero from "../Hero";
import WhatsNew from "../WhatsNew";
import SelfReg from "./SelfReg";

const HomePage: React.FC<{ isEnglish: boolean }> = ({ isEnglish }) => {


    return (

        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <Hero />
            <WhatsNew isEnglish={isEnglish} />
            <SelfReg isEnglish={isEnglish} />
        </div>

    );
};

export default HomePage;

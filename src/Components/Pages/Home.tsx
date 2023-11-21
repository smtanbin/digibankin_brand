import { useContext } from "react";
import { LanguageContext } from "../../Context/languageProvider";
import Hero from "../Hero";
import WhatsNew from "../WhatsNew";
import Template from "./Template";



// Image
import loginPage from "../../assets/registration/LoginPage.png"
import RegPage from "../../assets/registration/RegPage.png"
import otp from "../../assets/registration/otp.png"
import twinPanal from "../../assets/registration/twinPanal.png"
import resetSs from "../../assets/reset/Reset.png"
import steps from "../../assets/reset/steps.png"


interface template_data {

    enData: {
        title: string;
        greeting: string[];
        steps: {
            img: string;
            title: string;
            content: string[];
        }[];
        end: string;
    }, bnData: {
        title: string;
        greeting: string[];
        steps: {
            img: string;
            title: string;
            content: string[];
        }[];
        end: string;
    }

}





const HomePage: React.FC = ({ templates }) => {




    return (



    );
};

export default HomePage


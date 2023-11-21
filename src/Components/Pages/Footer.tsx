// 
// import { useContext } from "react"
// import { LanguageContext } from "../../Context/languageProvider"
import sbl_logo from "../../assets/SBL_logo.svg"
import playStore from "../../assets/playStore.svg";
import AppStore from "../../assets/Appstore.svg";
import { Element } from 'react-scroll';

const Footer: React.FC = () => {


    // const { language } = useContext(LanguageContext);




    return (
        <Element name={"Contact_Us"} key={"Contact_Us"}>
            <div className="hero hero-lg p-centered text-center">
                <div className="hero-body">
                    <img className="col-4" src={sbl_logo} alt="" />

                    <div className="columns mt-2">
                        <div className="column col-8 text-left">
                            <h5>Contact</h5>
                            <p>
                                <b>Cell:</b> +8801977729001 <br />
                                <b>Email:</b> <a href="mailto:adc@standardbankbd.com">adc@standardbankbd.com</a><br />
                                <b>Website:</b> <a href="https://www.standardbankbd.com/DigiBanking.php" target="_blank">www.standardbankbd.com</a>
                            </p>

                        </div>
                        <div className="column col-4 ">
                            <p>Downnload Digibanking from </p>
                            <a className="navbar-brand btn btn-link p-0 m-0" href="https://play.google.com/store/apps/details?id=com.cibl.sblmobilebanking" target="_blank">
                                <img style={{ height: "100%" }} src={playStore} alt="Play Store" />
                            </a>
                            <a className="navbar-brand btn btn-link p-0 ml-2 m-0" href="https://apps.apple.com/us/app/sbl-digibanking/id1212107605" target="_blank">
                                <img style={{ height: "100%" }} src={AppStore} alt="App Store" />
                            </a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="text-tiny">All Rights Reserved Standard Bank Ltd © 2023
                </div>
            </div></Element>
    );
};

export default Footer;

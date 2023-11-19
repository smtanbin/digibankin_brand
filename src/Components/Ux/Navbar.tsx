import digiLogo from "../../assets/digibanking_logo.png"
import playStore from "../../assets/playStore.svg"
import AppStore from "../../assets/Appstore.svg"
import SlidingButton from "../SlidingButton"



const Navbar: React.FC<{ isEnglish: boolean; setIsEnglish: (arg0: () => boolean) => void }> = ({ isEnglish, setIsEnglish }) => {




    return (
        <header className="navbar p-2 p-fixed" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: '100vw', backgroundColor: 'rgba(185, 233, 198, 0.2)', color: 'black', backdropFilter: 'blur(10px)' }}>
            <section className="navbar-section ml-2">
                <img height={"50%"} src={digiLogo} />
            </section>

            <section className="navbar-section" >
                <a className="navbar-brand btn btn-link p-0 m-0" href="https://play.google.com/store/apps/details?id=com.cibl.sblmobilebanking" >
                    <img style={{ height: "100%" }} src={playStore} />
                </a>
                <a className="navbar-brand btn btn-link p-0 ml-2 m-0" href="https://play.google.com/store/apps/details?id=com.cibl.sblmobilebanking" >
                    <img style={{ height: "100%" }} src={AppStore} />
                </a>

                <div className="mx-2 d-flex" style={{ justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center" }}>
                    <SlidingButton isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
                </div>

            </section>
        </header>
    )
}

export default Navbar

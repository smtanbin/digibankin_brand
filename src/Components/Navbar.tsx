import digiLogo from "../assets/digibanking_logo.png"
import playStore from "../assets/google-play-badge.png"


const Navbar = () => {


    return (
        <header className="navbar p-29">
            <section className="navbar-section ml-2">
                <img height={"50%"} src={digiLogo} />
            </section>

            <section className="navbar-section">

                <a className="navbar-brand btn btn-link p-0 m-0" href="https://play.google.com/store/apps/details?id=com.cibl.sblmobilebanking" >
                    <img height={"100%"} src={playStore} />
                </a>
                <a href="#" className="btn btn-link">App Store</a>
            </section>
        </header>
    )
}

export default Navbar

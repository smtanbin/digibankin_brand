import React, { useEffect, useState } from 'react';
import digiLogo from "../../assets/Digibanking.svg";
import playStore from "../../assets/playStore.svg";
import AppStore from "../../assets/Appstore.svg";
import SlidingButton from "../SlidingButton";
import '../../style/Navbar.css'; // Import the CSS file for styling



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let scrollTimeout: any;



    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isVisible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);

        // Clear previous timeout
        clearTimeout(scrollTimeout);


        scrollTimeout = setTimeout(() => {
            setVisible(true);
        }, 3000);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);




    return (
        <div>
            <header
                className={`navbar hide-sm p-fixed ${visible ? 'visible' : 'hidden'}`}
                style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: '100vw', backgroundColor: 'rgba(185, 233, 198, 0.2)', color: 'black', backdropFilter: 'blur(10px)', zIndex: "99" }}
            >
                <section className="navbar-section ml-2">
                    <a className="off-canvas-toggle btn btn-primary btn-action show-sm" href="#sidebar-id">
                        <i className="icon icon-menu"></i>
                    </a>
                    <a href="/" className="p-2" >
                        <img height={"45px"} src={digiLogo} alt="Digi Logo" />
                    </a>
                </section>

                <section className="navbar-section hide-sm">
                    <a className="navbar-brand btn btn-link p-0 m-0" href="https://play.google.com/store/apps/details?id=com.cibl.sblmobilebanking" target="_blank">
                        <img style={{ height: "100%" }} src={playStore} alt="Play Store" />
                    </a>
                    <a className="navbar-brand btn btn-link p-0 ml-2 m-0" href="https://apps.apple.com/us/app/sbl-digibanking/id1212107605" target="_blank">
                        <img style={{ height: "100%" }} src={AppStore} alt="App Store" />
                    </a>

                    <div className="mx-2 d-flex" style={{ justifyContent: "center", justifyItems: "center", alignItems: "center", alignContent: "center" }}>
                        <SlidingButton />
                    </div>
                </section>
            </header>




            <header
                className="navbar show-sm p-fixed"
                style={{

                    width: '100vw',
                    backgroundColor: 'rgba(185, 233, 198, 0.2)',
                    color: 'black',
                    backdropFilter: 'blur(10px)',
                    zIndex: "99",
                    padding: '2%'
                }}
            >
                <section className="navbar-section float-left">
                    <a href="/" className="navbar-brand mr-2">
                        <img height={'35px'} src={digiLogo} alt="Digi Logo" />
                    </a>
                </section>

                <section className="navbar-section float-right mr-2">
                    <a className="off-canvas-toggle btn btn-link btn-action" style={{ color: "#056839" }} href="#sidebar-id">
                        <i className="icon icon-menu"></i>
                    </a>
                </section>
            </header>

        </div>
    );
};

export default Navbar;

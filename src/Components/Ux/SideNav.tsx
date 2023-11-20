import { useContext } from "react";
import { Link } from "react-router-dom"
import { LanguageContext } from "../../Context/languageProvider";

const SideNav = () => {
    const { language } = useContext(LanguageContext);



    return (
        <div className="hide-sm">
            <div className="ml-2 p-fixed">
                <div className="hero">
                    <div className="hero-body">
                        <h4>Content</h4>

                    </div>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={`/`}>{language ? "Home" : "হোম"}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/About`}>{language ? "About" : "সম্পর্কিত"}</Link>
                    </li>
                    <li className="nav-item active">
                        <h5 style={{ color: "#056839" }}>{language ? "Self Service" : "স্ব সেবা"}</h5>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={`/SelfReg`}>{language ? "Self-Register" : "স্ব-নিবন্ধন"}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/SelfReset`}>{language ? "Self-Reset" : "স্ব-রিসেট"}</Link>

                            </li>

                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SideNav
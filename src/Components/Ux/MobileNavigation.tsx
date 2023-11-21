import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import "../../style/MobileNavCheckBox.css"
import { LanguageContext } from '../../Context/languageProvider';

interface ModelData {
    title: string;
    greeting: string[];
    steps: {
        img: string;
        title: string;
        content: string[];
    }[];
    end: string;
}


interface MobileNavigationProps {
    data: ModelData[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ data }) => {
    const isSmallScreen = window.innerWidth <= 1200;


    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
        setLanguage(!language);
    };

    return (
        <nav className='pl-2'>
            <ul className="nav">
                {data.map((template, index) => (
                    <li className="nav-item p-1" key={index}>
                        {isSmallScreen ? (
                            <a href={`#${template.title.toString().replace(/\s+/g, '_').toLocaleLowerCase()}`}>
                                {template.title}
                            </a>
                        ) : (
                            <ScrollLink
                                activeClass="active"
                                to={template.title.toString().replace(/\s+/g, '_').toLocaleLowerCase()}
                                spy={true}
                                // smooth={true}
                                offset={-500}
                                duration={1000}
                            >
                                {template.title}
                            </ScrollLink>
                        )}
                    </li>
                ))}
                <li className="nav-item p-1" key={"Contact_Us"}>

                    <ScrollLink
                        activeClass="active"
                        to={"contact"}
                        spy={true}
                        smooth={true}
                        offset={-500}
                        duration={1000}
                    >
                        {language ? "Contact Us" : "যোগাযোগ"}
                    </ScrollLink>

                </li>
                <br />
                <h6>languages</h6>
                <div className="checkbox-wrapper-47 ml-2">
                    <input onClick={toggleLanguage} type="checkbox" name="cb" id="cb-47" />
                    <label htmlFor="cb-47"> বাংলা</label>
                </div>
            </ul>
        </nav>
    );
};

export default MobileNavigation;

import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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


interface SideNavigationProps {
    data: ModelData[];
}

const SideNavigation: React.FC<SideNavigationProps> = ({ data }) => {

    const { language } = useContext(LanguageContext);


    return (
        <nav>
            <div className="hide-sm">
                <div className="ml-2 p-fixed">
                    <div className="hero">
                        <div className="hero-body">
                            <h4>Content</h4>
                        </div>
                    </div>

                    <ul className="nav">
                        {data.map((template, index) => (
                            <li className="nav-item p-1" key={index + Math.random()}>
                                <ScrollLink
                                    key={index}
                                    activeClass="active"
                                    to={template.title.toString().replace(/\s+/g, '_').toLocaleLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    offset={-50} // Adjust the offset if you have a fixed navbar
                                    duration={1000}
                                >
                                    {template.title}
                                </ScrollLink> </li>
                        ))}

                        <li className="nav-item p-1" key={"Contact_Us"}>

                            <ScrollLink
                                key={"57bne457"}
                                activeClass="active"
                                to={"Contact_Us"}
                                spy={true}
                                smooth={true}
                                offset={-5}
                                duration={1000}
                            >
                                {language ? "Contact Us" : "যোগাযোগ"}
                            </ScrollLink>

                        </li>
                    </ul>

                </div>

            </div>

        </nav>
    );
};

export default SideNavigation;

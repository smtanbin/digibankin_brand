import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

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


interface NavigationProps {
    data: ModelData[];
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
    const isSmallScreen = window.innerWidth <= 1200;


    return (
        <nav>
            <ul className="nav">
                {data.map((template, index) => (
                    <><li className="nav-item p-1" key={index}>
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
                    </li><li className="nav-item p-1" key={"Contact_Us"}>

                            <ScrollLink
                                activeClass="active"
                                to={"contact"}
                                spy={true}
                                // smooth={true}
                                offset={-500}
                                duration={1000}
                            >
                                {"Contact Us"}
                            </ScrollLink>

                        </li></>
                    // <li className="nav-item p-1">
                    //     <ScrollLink
                    //         key={index}
                    //         activeClass="active"
                    //         to={template.title.toString().replace(/\s+/g, '_').toLocaleLowerCase()}
                    //         spy={true}
                    //         smooth={true}
                    //         offset={-5} // Adjust the offset if you have a fixed navbar
                    //         duration={1000}
                    //     >
                    //         {template.title}
                    //     </ScrollLink>
                    // </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

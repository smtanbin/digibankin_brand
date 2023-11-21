// 
import { AnimatedHeader, HoverZoomImage } from "../AnimatedHeader";
import { Element } from 'react-scroll';

interface Step {
    img: string;
    title: string;
    content: string[];
}

interface TemplateProps {
    data: {
        title: string;
        greeting: string[];
        steps: Step[];
        end: string;
    };
}



const Template: React.FC<TemplateProps> = ({ data }) => {

    return (
        <Element name={data.title.toString().replace(/\s+/g, '_').toLocaleLowerCase()} key={data.title}>
            <section id={data.title.toString().replace(/\s+/g, '_').toLocaleLowerCase()}>
                <article
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        color: 'black',
                        backdropFilter: 'blur(10px)'
                    }}>
                    <div key={Math.random()}>
                        <div className="hero hero-sm p-centered text-center" style={{ backgroundColor: 'rgba(185, 233, 198, 0.2)' }}>
                            <div className="hero-body ml-2">
                                <AnimatedHeader text={data.title} />
                            </div>
                            <div className="hero-body">
                                {data.greeting.map((_value: string, index: number) => (

                                    <span className="ml-2" key={index}>{data.greeting[index]}</span>

                                ))}
                            </div>
                        </div>
                    </div>
                    <br />

                    {data.steps.map((step: Step, index: number) => (
                        <div key={index + Math.random()} className="container grid-lg mt-2">
                            <div className="columns hide-sm">
                                <div className="column col-6">
                                    <div className="hero hero-sm">
                                        <div className="hero-body">
                                            <h2 style={{ color: "#056839" }}>Steps {index + 1} - {step.title}</h2>

                                            {step.content.map((value, index) => (
                                                <p key={index}>{value}</p>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <div className="column col-6 p-centered container grid-lg">
                                    <HoverZoomImage src={step.img} className="p-2 img-responsive img-fit-cover col-lg-12 col-6" alt="Login Page" />
                                </div>
                            </div>

                            <div className="container grid-sm show-sm">
                                <div className="columns">
                                    <div className="hero hero-sm">
                                        <div className="hero-body">
                                            <h2 style={{ color: "#056839" }}>Steps {index + 1} - {step.title}</h2>

                                            {step.content.map((value, index) => (
                                                <p key={index}>{value}</p>
                                            ))}

                                            <img src={step.img} className="img-responsive img-fit-cover col-lg-12 col-6" alt="Login Page" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                    <div key={Math.random()}>
                        <div className="hero hero-lg p-centered text-center" style={{ color: "#056839", backgroundColor: 'rgba(185, 233, 198, 0.2)' }}>
                            <div className="hero-body">
                                <h4>{data.end}</h4>
                            </div>
                        </div>
                    </div>
                </article>
                <br />
            </section>
        </Element>
    );
};

export default Template;

import { AnimatedHeader } from "./AnimatedHeader"



const Hero = () => {
    return (
        <div className="hero hero-lg  d-flex " style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="hero-body d-flex">
                <AnimatedHeader text={"SBL DigiBanking"} />
                <span className="text-tiny">Version 4.0</span>
            </div>
            <p className="text-large">User Quick Guide</p>
        </div>
    )
}

export default Hero
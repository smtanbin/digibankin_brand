// 
import { useContext } from "react"
import { LanguageContext } from "../../Context/languageProvider"
import loginPage from "../../assets/registration/LoginPage.png"
import { HoverZoomImage } from "../AnimatedHeader";
import RegPage from "../../assets/registration/RegPage.png"
import otp from "../../assets/registration/otp.png"
import twinPanal from "../../assets/registration/twinPanal.png"


interface Step {
    img: string; // Assuming loginPage is a string, adjust the type accordingly
    title: string;
    content: string[];
}

const SelfReg: React.FC = () => {


    const { language } = useContext(LanguageContext);



    const data = {
        ensData: {
            title: "Self Registration",
            greeting: [
                "To register Digi banking app you need a valid Account Number that is not registered to SBL Digibanking.",
                "Active Mobile Number"],
            steps: [{
                img: loginPage,
                title: "Login",
                content: ["Opening the Digi banking app and clicking the Account option, you will be introduced to the Login page."]
            },
            {
                img: RegPage,
                title: "Register Button",
                content: [`Press Register Now Button`]
            },
            {
                img: twinPanal,
                title: "Entry",
                content: ["Enter your Valid 11 Digit Standard Bank Account no And Mobile no associated with that account."]
            },
            {
                img: otp,
                title: "Validation",
                content: ["An OTP will be sent to your Device. For Android users, OTP will be picked auto. For iOS users you have to submit the OTP."]
            }
            ],
            end: "Congratulations! You have successfully registered the SBL Digibanking app.",
        }, bnData: {
            title: "স্ব নিবন্ধন",
            greeting: [
                "ডিজি ব্যাঙ্কিং অ্যাপ নিবন্ধন করতে আপনার একটি বৈধ অ্যাকাউন্ট নম্বর প্রয়োজন যা SBL ডিজিব্যাঙ্কিং-এ নিবন্ধিত নয়।",
                "সক্রিয় মোবাইল নম্বরr"],
            steps: [{
                img: loginPage,
                title: "লগইন",
                content: ["ডিজি ব্যাঙ্কিং অ্যাপ খুললে এবং অ্যাকাউন্ট বিকল্পে ক্লিক করলে, আপনাকে লগইন পৃষ্ঠায় পরিচয় করিয়ে দেওয়া হবে।"]
            },
            {
                img: RegPage,
                title: "রেজিস্টার বোতাম",
                content: [`এখন "রেজিস্টার বোতাম" টিপুন`]
            },
            {
                img: twinPanal,
                title: "প্রবেশ",
                content: ["আপনার বৈধ 11 ডিজিটের স্ট্যান্ডার্ড ব্যাঙ্ক অ্যাকাউন্ট নম্বর এবং সেই অ্যাকাউন্টের সাথে সম্পর্কিত মোবাইল নম্বর লিখুন"]
            },
            {
                img: otp,
                title: "বৈধকরণ",
                content: ["আপনার ডিভাইসে একটি OTP পাঠানো হবে। অ্যান্ড্রয়েড ব্যবহারকারীদের জন্য, OTP স্বয়ংক্রিয়ভাবে বাছাই করা হবে। iOS ব্যবহারকারীদের জন্য আপনাকে OTP জমা দিতে হবে।"]
            }
            ],
            end: "অভিনন্দন! আপনি সফলভাবে SBL Digibanking অ্যাপ নিবন্ধন করেছেন।",
        }
    }

    const stateData = language ? data.ensData : data.bnData


    return (
        <section>
            <article key={Math.random()}>
                <div className="hero">
                    <div className="hero-body">
                        <h1 style={{ color: "#056839" }}>{stateData.title}</h1>
                    </div>
                    <div className="hero-body">
                        {stateData.greeting.map((_value: string, index: number) => (
                            <ul>
                                {<li key={index}>{stateData.greeting[index]}</li>}
                            </ul>
                        ))}
                    </div>
                </div>
            </article>

            {stateData.steps.map((step: Step, index: number) => (
                <article key={index + Math.random()} className="container grid-lg mt-2">
                    <div className="columns">
                        <div className="column">
                            <div className="hero">
                                <div className="hero-body">
                                    <h2 style={{ color: "#056839" }}>Steps {index + 1} - {step.title}</h2>

                                    {step.content.map((value, index) => (
                                        <p key={index}>{value}</p>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <HoverZoomImage src={step.img} className="img-responsive img-fit-cover col-lg-12 col-6" alt="Login Page" />
                        </div>
                    </div>
                </article>
            ))}
            <article key={Math.random()}>
                <div className="hero hero-lg p-centered text-center">
                    <div className="hero-body">
                        <h3>{stateData.end}</h3>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default SelfReg;

// 
import { useContext } from "react"
import { LanguageContext } from "../../Context/languageProvider"
import loginPage from "../../assets/registration/LoginPage.png"
import { HoverZoomImage } from "../AnimatedHeader";
import resetSs from "../../assets/reset/Reset.png"
import otp from "../../assets/registration/otp.png"
import steps from "../../assets/reset/steps.png"


interface Step {
    img: string; // Assuming loginPage is a string, adjust the type accordingly
    title: string;
    content: string[];
}

const SelfReset: React.FC = () => {


    const { language } = useContext(LanguageContext);

    const ensData = {
        title: "Self Reset",
        greeting: [
            "Customer can reset their password or know their user ID from Digibanking."],
        steps: [{
            img: loginPage,
            title: "Login",
            content: ["Opening the Digi banking app and clicking the Account option, you will be introduced to the Login page."]
        },
        {
            img: resetSs,
            title: "Forget ID or Password",
            content: [`Press "Forgot  ID or Password" Button`]
        },
        {
            img: steps,
            title: "Entry",
            content: ["Enter your Valid 11-digit Standard Bank Account no And Mobile number or email associated with that account."]
        },
        {
            img: otp,
            title: "Validation",
            content: ["An OTP will be sent to your Device via your desired method."]
        }
        ],
        end: "Congratulations! You will receive your ID and Temporary password via message or email.",
    };

    const bnData = {
        title: "স্ব রিসেট",
        greeting: [
            "গ্রাহকরা তাদের পাসওয়ার্ড রিসেট করতে পারেন বা ডিজিব্যাঙ্কিং থেকে তাদের ব্যবহারকারী আইডি জানতে পারেন।"],
        steps: [{
            img: loginPage,
            title: "লগইন",
            content: ["ডিজি ব্যাঙ্কিং অ্যাপ খুললে এবং অ্যাকাউন্ট বিকল্পে ক্লিক করলে, আপনাকে লগইন পৃষ্ঠায় পরিচয় করিয়ে দেওয়া হবে।"]
        },
        {
            img: resetSs,
            title: "Forgot ID or Password বোতাম",
            content: [`"Forgot ID or Password" বোতাম টিপুন`]
        },
        {
            img: steps,
            title: "প্রবেশ",
            content: ["আপনার বৈধ 11-সংখ্যার স্ট্যান্ডার্ড ব্যাঙ্ক অ্যাকাউন্ট নম্বর এবং সেই অ্যাকাউন্টের সাথে সম্পর্কিত মোবাইল নম্বর বা ইমেল লিখুন।"]
        },
        {
            img: otp,
            title: "বৈধকরণ",
            content: ["আপনার পছন্দসই পদ্ধতির মাধ্যমে আপনার ডিভাইসে একটি OTP পাঠানো হবে।"]
        }
        ],
        end: "অভিনন্দন! আপনি বার্তা বা ইমেলের মাধ্যমে আপনার আইডি এবং অস্থায়ী পাসওয়ার্ড পাবেন।",
    };

    const stateData = language ? ensData : bnData


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

export default SelfReset;

// 
import { useContext } from "react"
import { LanguageContext } from "../../Context/languageProvider"
import loginPage from "../../assets/registration/LoginPage.png"

import RegPage from "../../assets/registration/RegPage.png"
import otp from "../../assets/registration/otp.png"
import twinPanal from "../../assets/registration/twinPanal.png"



const About: React.FC = () => {


    const { language } = useContext(LanguageContext);

    const ensData = {
        title: "About",
        greeting: [
            "SBL DigiBanking is a Mobile phone App based banking service accessible through your Smartphone or tab from anywhere, anytime. Just by clicking on any of the menus on the list, you can now perform all the basic banking services as and when required."],
        steps: [{
            title: "Features ",
            content: [
                "Viewing Account Information for Savings, Current, DPS, FDR & Loan etc.",
                "Real Time Fund Transfer from one SBL account to another SBL account.",
                "Interbank Fund Transfer.",
                "Credit Card Bill Payment.",
                "Instant WASA Bill Payment.",
                "Instant Mobile Recharge.",
                "SBL Discount Offer and EMI Information.",
                "Contact SBL(Branch, Complain Cell).",
                "Notify Apps User on various update.",
                "Locate SBL Branches, ATMs, Agents and CDMs & SBL Expresses.",
                "bKash Fund Transfer.",
                "Nagad Fund Transfer",
            ]

        },
        {

            title: "Which devices are supported for using SBL DigiBanking?",
            content: ["Currently SBL DigiBanking is available on Android Operating System (Version 10 or above) Any user having Smartphone or Tab with Android Operating System will be able to run this App on his/her device."]
        },
        {

            title: "Is SBL DigiBanking secured?",
            content: ["SBL DigiBanking ensures the highest level of security by tagging your device’s. Currently you can tag unlimited devices. We are providing unique User ID & Password for this app. 2FA (2 Factor Authentication System) will be applicable for transaction & beneficiary add. Upon completing your registration process you can simply download the App and start using it with the complete peace of mind."]
        },
        {

            title: "Services Charge",
            content: ["Annually Tk. 200 BDT + 15% VAT"]
        }
        ],

    };

    const bnData = {
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
    };

    const stateData = language ? ensData : bnData


    return (
        <section>
            <article key={Math.random()} style={{ marginTop: "100px" }}>
                <div className="hero hero-sm">

                    <h1 style={{ color: "#056839" }}>{stateData.title}</h1>

                    <div className="hero-body">
                        {stateData.greeting.map((_value: string, index: number) => (

                            <p key={index}>{stateData.greeting[index]}</p>

                        ))}
                    </div>
                </div>
            </article>

            {stateData.steps.map((stateData, index: number) => (
                <article key={index + Math.random()} className="container grid-lg">
                    <div className="mt-2 p-2">

                        <h4 style={{ color: "#056839" }}>{stateData.title}</h4>
                        {stateData.content.map((value, index) => (
                            <small key={index}>{value}</small>
                        ))}

                    </div>
                </article>
            ))}
        </section>
    );
};

export default About;

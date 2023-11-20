import { useContext } from "react";
import { LanguageContext } from "../Context/languageProvider";

const WhatsNew: React.FC = () => {

    const { language } = useContext(LanguageContext);


    const english: string[] = [
        "Any Standard Bank account holders can now Self-register to the app.",
        "Customers now can change passwords via the SBL Digibanking app.",
        "Biometric login",
        "Mobile Recharge now can select a different operator.",
        "User Experience updated.",
        "Bug fix."
    ]
    const bangla: string[] = [
        "যেকোনো স্ট্যান্ডার্ড ব্যাঙ্ক অ্যাকাউন্টধারীরা এখন অ্যাপে স্ব - নিবন্ধন করতে পারবেন।",
        "গ্রাহকরা এখন SBL ডিজিব্যাঙ্কিং অ্যাপের মাধ্যমে পাসওয়ার্ড পরিবর্তন করতে পারবেন।",
        "বায়োমেট্রিক লগইন।",
        "মোবাইল রিচার্জ এখন একটি ভিন্ন অপারেটর নির্বাচন করতে পারেন।",
        "ব্যবহারকারীর অভিজ্ঞতা আপডেট করা হয়েছে।",
        "বাগ ফিক্স।",
    ]




    return (

        <div className="hero" >

            <div className="hero-body m-2  p-centered">
                {language ?
                    <div>
                        <h1 style={{ color: "#750000" }}>What is new?</h1>

                        <ul className="list-disc">
                            {english.map((value: string, index: number) => (
                                <li key={index} className="ml-8">{value}</li>
                            ))}
                        </ul>
                    </div>
                    :
                    <div>
                        <h1 style={{ color: "#750000" }}>কি নতুন?</h1>

                        <ul className="list-disc">
                            {bangla.map((value: string, index: number) => (
                                <li key={index} className="ml-8">{value}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}

export default WhatsNew

const WhatsNew: React.FC<{ isEnglish: boolean }> = ({ isEnglish }) => {

    return (

        <div className="hero">
            <div className="hero-body m-2  p-centered">
                <h2 className="">What is new?</h2>
                <ul className="list-disc">
                    <li className="ml-8">Any Standard Bank account holders can now Self Register to the app.</li>
                    <li className="ml-8">Customer now can change password via SBL Digibanking app.</li>
                    <li className="ml-8">Biometric login.</li>
                    <li className="ml-8">Mobile Recharge now can select Different operator.</li>
                    <li className="ml-8">User Experience updated.</li>
                    <li className="ml-8">Bug fix.</li>
                </ul>
            </div>
        </div>
    )
}

export default WhatsNew

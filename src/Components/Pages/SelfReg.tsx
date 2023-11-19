import loginPage from "../../assets/registration/LoginPage.png"


const SelfReg: React.FC<{ isEnglish: boolean }> = ({ isEnglish }) => {
    return (
        isEnglish ?
            <div className="container grid-lg">
                <div className="columns">
                    <div className="column">
                        <div className="hero">
                            <div className="hero-body">
                                <h1>Self Register</h1>

                                <p>To register Digi banking app you need a valid</p>
                                <ul>
                                    <li>Account Number that not register to SBL Digibanking.</li>
                                    <li>Active Mobile Number</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <img src={loginPage} className="img-responsive img-fit-cover " />
                    </div>
                </div>
            </div> :
            <div className="container grid-lg">
                <div className="columns">
                    <div className="column">
                        <div className="hero">
                            <div className="hero-body">
                                <h1>স্ব নিবন্ধন</h1>

                                <p>ডিজি ব্যাঙ্কিং অ্যাপ নিবন্ধন করার জন্য আপনাকে বৈধ হতে হবে</p>
                                <ul>
                                    <li>অ্যাকাউন্ট নম্বর যা SBL ডিজিব্যাঙ্কিং-এ নিবন্ধিত নয়।</li>
                                    <li>সক্রিয় মোবাইল নম্বর</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <img src={loginPage} className="img-responsive img-fit-cover " />
                    </div>
                </div>
            </div>


    )
}
export default SelfReg
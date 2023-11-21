import { useContext } from "react";
import { LanguageContext } from "../Context/languageProvider";
import "../style/switch.css"


const SlidingButton: React.FC = () => {



    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
        setLanguage(!language);
    };


    return (

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>


            <div className="checkbox-wrapper-35">
                <input onClick={toggleLanguage} className="switch" type="checkbox" id="switch" name="switch" value="private" />
                <label htmlFor="switch">
                    <span className="switch-x-text">Language is </span>
                    <span className="switch-x-toggletext">
                        <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel">Unchecked: </span>Eng</span>
                        <span className="switch-x-checked"><span className="switch-x-hiddenlabel">Checked: </span>বাং</span>
                    </span>
                </label>
            </div>

        </div>
    );
};

export default SlidingButton;





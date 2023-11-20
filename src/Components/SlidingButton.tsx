import { useContext } from "react";
import { LanguageContext } from "../Context/languageProvider";


const SlidingButton: React.FC = () => {



    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
        setLanguage(!language);
    };

    const buttonStyles = {
        backgroundColor: '#50C878',
        color: '#000',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        borderRadius: '5px',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    };



    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
            <button
                style={buttonStyles}
                onClick={toggleLanguage}
            >
                {language ? 'English' : 'বাংলা'}
            </button>
        </div>
    );
};

export default SlidingButton;

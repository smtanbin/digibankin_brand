

const SlidingButton: React.FC<{ isEnglish: boolean; setIsEnglish: (arg0: () => boolean) => void }> = ({ isEnglish, setIsEnglish }) => {

    const toggleLanguage = () => {
        setIsEnglish(() => !isEnglish);
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
    };

    const englishStyles = {
        ...buttonStyles,
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    };

    const banglaStyles = {
        ...buttonStyles,
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
            <button
                style={isEnglish ? englishStyles : banglaStyles}
                onClick={toggleLanguage}
            >
                {isEnglish ? 'English' : 'বাংলা'}
            </button>
        </div>
    );
};

export default SlidingButton;

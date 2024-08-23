import LogoSvg from "../../assets/svg/LogoSVG.jsx";
import './styles.css';

const Header = () => {
    const handleSignUpClick = () => {
        console.log('Sign up click');
    };

    return (
        <div className="headerContainer">
            <LogoSvg />
            <button className="signUpBtn" onClick={handleSignUpClick}>
                Sign Up
            </button>
        </div>
    );
};

export default Header;

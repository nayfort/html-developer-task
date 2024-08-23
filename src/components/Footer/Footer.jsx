import {FbSVG, LinkedInSVG, LogoSvg, InstSVG} from "../../assets/svg/index.jsx";
import './styles.css';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className='footerFirstBlock'>
                <LogoSvg/>
                <div className='footerLinks'>
                    <nav>
                        <ul className="footerLinks">
                            <li><NavLink exact to="/" className='footerLink'>Home</NavLink></li>
                            <li><NavLink to="/about" className='footerLink'>About Us</NavLink></li>
                            <li><NavLink to="/services" className='footerLink'>Services</NavLink></li>
                            <li><NavLink to="/terms-of-use" className='footerLink'>Terms Of Use</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='footerSocial'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FbSVG/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInSVG/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstSVG/>
                    </a>
                </div>
            </div>
            <div className='footerSecondBlock'>
                <div className='contactUs'>Contact Us</div>
                <div className='contactMail'>support@markify.com</div>
            </div>
        </div>
    );
};

export default Footer;

import { AboutMobile, AboutPictureSVG } from '../../assets/svg/index.jsx';
import './styles.css';
import { useIsMobile } from '../../hooks/useIsMobile.jsx';

const About = () => {
  const isMobile = useIsMobile();

  return (
    <div className="aboutContainer">
      {isMobile ? <AboutMobile /> : <AboutPictureSVG />}
      <div className="aboutText">
        <div>
          <div className="aboutTitle">About</div>
          <div className="aboutRectangle"></div>
        </div>
        <div className="aboutDescription">
          Lorem ipsum dolor sit amet consectetur. Faucibus nunc et mattis at
          feugiat sagittis volutpat. At netus diam ipsum cras turpis imperdiet
          diam vel consequat. Ultrices in faucibus sodales sed sed. Enim aenean
          dignissim sed a non mollis. Sed ut arcu enim ullamcorper.
        </div>
      </div>
    </div>
  );
};

export default About;

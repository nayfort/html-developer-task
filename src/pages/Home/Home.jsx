import { HomeMobile, HomePictureSVG } from '../../assets/svg/index.jsx';
import './styles.css';
import { useIsMobile } from '../../hooks/useIsMobile.jsx';

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className="homeContainer">
      {isMobile ? <HomeMobile /> : <HomePictureSVG />}
      <div className="homeText">
        <div>
          <div className="homeTitle">
            Lorem ipsum dolor sit amet consectetur. Mi cras non non quis.
          </div>
          <div className="homeRectangle"></div>
        </div>
        <div className="homeDescription">
          Lorem ipsum dolor sit amet consectetur. Faucibus nunc et mattis at
          feugiat sagittis volutpat. At netus diam ipsum cras turpis imperdiet
          diam vel consequat. Ultrices in faucibus sodales sed sed. Enim aenean
          dignissim sed a non mollis. Sed ut arcu enim ullamcorper.
        </div>
      </div>
    </div>
  );
};

export default Home;

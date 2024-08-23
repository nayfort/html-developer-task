import { ServicesMobile, ServicesPictureSVG } from '../../assets/svg/index.jsx';
import './styles.css';
import { useIsMobile } from '../../hooks/useIsMobile.jsx';

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <div className="servicesContainer">
      {isMobile ? <ServicesMobile /> : null}
      <div className="servicesText">
        <div>
          <div className="servicesTitle">Services</div>
          <div className="servicesRectangle"></div>
        </div>
        <div className="servicesDescription">
          Lorem ipsum dolor sit amet consectetur. Faucibus nunc et mattis at
          feugiat sagittis volutpat. At netus diam ipsum cras turpis imperdiet
          diam vel consequat. Ultrices in faucibus sodales sed sed. Enim aenean
          dignissim sed a non mollis. Sed ut arcu enim ullamcorper.
        </div>
      </div>
      {!isMobile && <ServicesPictureSVG />}
    </div>
  );
};

export default Services;

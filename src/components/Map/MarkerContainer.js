import fakeResImg from "../../assets/fakeres.jpg";
import "./map.css";

const MarkerContainer = ({ pl }) => {
  return (
    <div className="markerContainer">
      <div className="map-paper">
        <span className="paper-title">{pl.name}</span>
        <img
          src={`${pl.photo ? pl.photo?.images?.large.url : fakeResImg}`}
          alt={pl.name}
          className="paper-img"
        />
      </div>
    </div>
  );
};

export default MarkerContainer;

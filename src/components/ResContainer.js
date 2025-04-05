import { CDN_URL } from "../utils/constants";


const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  
  const ResContainer = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
      resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <div className="res-img">
          <img
            alt="res-img"
            src={
              CDN_URL +
              cloudinaryImageId
            }
          />
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
};

export default ResContainer;
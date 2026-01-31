import { IMG_URL } from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = restaurant.info;
  return (
    <div className="restaurant-card">
      <img className="res-image" src={IMG_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <p className="res-rating"> {avgRating} stars</p>
      <p className="res-cuisines">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;

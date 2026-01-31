import { useEffect, useState } from "react";
import { RestaurantCard } from "../components";
import { useRestaurants } from "../hooks";
import "./RestaurantList.css";

const RestaurantList = () => {
  const { restaurants, loading, error } = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  if (loading) return <h3>Loading....</h3>;
  if (error) return <h3>{error}</h3>;

  const handleFilterRestaurants = () => {
    const filteredRestaurantList = restaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5,
    );
    setFilteredRestaurants(filteredRestaurantList);
  };

  return (
    <div className="restaurant-list-wrapper">
      <div className="content-container">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>

        <div className="filter-container">
          <button className="filter-btn" onClick={handleFilterRestaurants}>
            Top Rated Restaurants
          </button>
        </div>

        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;

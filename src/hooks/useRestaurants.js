import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await fetch(SWIGGY_API);
      if (!response.ok) {
        throw new error("Failed to fetch restaurants");
      }
      const json = await response.json();
      const restaurantsList =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(restaurantsList);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

export default useRestaurants;

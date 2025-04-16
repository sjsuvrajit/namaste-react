import ResContainer from "./ResContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Localy declair state
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6418276&lng=88.42963530000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    

    setRestaurentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  //conditional Rendering
  return restaurentList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}/>
          <button className="search-btn" onClick={() => {
            console.log(searchItem);
            const filteredRes = restaurentList.filter((res) => res.info.name.toLowerCase().includes(searchItem.toLowerCase()))
            console.log(filteredRes);
            setFilteredResList(filteredRes);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = restaurentList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setRestaurentList(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <ResContainer key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

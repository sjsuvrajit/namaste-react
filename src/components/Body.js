import ResContainer from "./ResContainer";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //Localy declair state
  const [restaurentList, setRestaurentList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
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
        {restaurentList.map((restaurant) => (
          <ResContainer key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

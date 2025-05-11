import { useState, useEffect} from "react";
import { useParams } from "react-router";
import { Menu_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menuData = await fetch(Menu_URL + resId);

        const menuJson = await menuData.json();
        console.log(menuJson);    
        setResInfo(menuJson?.data);    
    }

    if(resInfo === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    let { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    if(!itemCards) {
       itemCards =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    }

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || 
    //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(resInfo);
    console.log("itemCards --> ", itemCards);

    return (
        <div className="resMenu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => 
                    <li key={item.card.info.id}>{item?.card?.info?.name} - {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
                
            </ul>
        </div>
    )
}

export default RestaurentMenu;
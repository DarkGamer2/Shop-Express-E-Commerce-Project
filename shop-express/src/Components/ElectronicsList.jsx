import ItemCard from "./ItemCard";
import { Items } from "../Data/Items";
import "../Styles/ItemList.css";

const ElectronicsList=()=>{

    return(
        <div className="item-list">
            {Items.filter(item=>item.itemType==="Electronic").map(electronic=>{
                return (
                    <ItemCard key={electronic.itemType} name={electronic.itemName} image={electronic.itemImage} price={electronic.itemPrice}/>
                )
            })}
        </div>
    )
};

export default ElectronicsList;
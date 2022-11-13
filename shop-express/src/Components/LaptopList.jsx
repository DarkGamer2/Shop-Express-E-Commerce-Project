import ItemCard from ".././Components/ItemCard";
import { Items } from "../Data/Items";
import "../Styles/ItemList.css"
const LaptopList=()=>{

    return(
        <div className="item-list">
            {Items.filter(item=>item.itemType==="Laptop").map(laptop=>{
                return(
                    <ItemCard name="Apple Macbook Pro" image={laptop.itemImage} title={laptop.itemName} 
                    price={laptop.itemPrice} currency={laptop.itemCurrency}/>
                )
            })}
        </div>
    )
}

export default LaptopList;
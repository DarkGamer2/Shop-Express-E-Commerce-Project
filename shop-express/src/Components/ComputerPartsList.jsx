import ItemCard from "./ItemCard";
import { Items } from "../Data/Items";
import "../Styles/ItemList.css";

const ComputerPartsList=()=>{

   return(
     <div className="item-list">
        {Items.filter(item=>item.itemTag==="computer-part").map(part=>{
            return(
                <ItemCard name={part.itemName} image={part.itemImage} price={part.itemPrice} />
            )
        })}
    </div>
   )

}

export default ComputerPartsList;
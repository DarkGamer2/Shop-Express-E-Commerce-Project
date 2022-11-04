import ItemCard from "./ItemCard";
import {Items} from "../Data/Items";
import "../Styles/ItemList.css"
const ItemList=()=>{

  return(
    <div className="item-list">
         {Items.map((item,key)=>{
    return(
        <ItemCard image={item.itemImage} title={item.itemName} price={item.itemPrice} currency={item.itemCurrency}/>
    )
   })}
    </div>
  )
}

export default ItemList;

//  {Items.map((item,key)=>{
//     return(
//         <ItemCard key={item.itemID} image={item.itemImage} title={item.itemName} description={item.itemDescription}
//         price={item.itemPrice}/>
//     )
//    })}
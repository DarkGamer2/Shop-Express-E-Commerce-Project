import "../Styles/ItemCard.css"

const ItemCard=(props)=>{
return(
    <div className="card-container">
        <div className="card-image">
        <img src={props.image} alt="item"/>
        </div>
        <div className="card-title">
            <h4>{props.title}</h4>
        </div>
        {/* <div className="card-description">
            <h6>{props.description}</h6>
        </div> */}
        <div className="card-price">
            <p>{props.price} {props.currency}</p>
        </div>
        <div className="cart-button">
            <button>Add To Cart</button>
        </div>
    </div>
)
}

export default ItemCard;
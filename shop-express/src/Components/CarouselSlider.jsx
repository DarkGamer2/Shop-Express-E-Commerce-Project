import RyzenWallpaper from "../Images/amd-ryzen--wallpaper.jpg";
import "../Styles/Carousel.css"
const CarouselSlider=()=>{

    return(
        <div className="image-container">
        <img src={RyzenWallpaper} className="ryzen-image" alt="wallpaper"/>
        <h3 className="cpu">50% OFF ALL RYZEN CPU's</h3>
        <h3 className="ryzen-ready">BE RYZEN READY</h3>
        <button className="shop-now-button">SHOP NOW</button>
        </div>
    )
}

export default CarouselSlider;
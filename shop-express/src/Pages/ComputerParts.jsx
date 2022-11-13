import ComputerPartsList from "../Components/ComputerPartsList";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const ComputerParts=()=>{

    return(
        <div>
            <NavigationBar/>
            <ComputerPartsList/>
                <Footer/>
        </div>
    )
}

export default ComputerParts;
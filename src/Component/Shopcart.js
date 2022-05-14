import Nav from "./Nav";
import Footer from "./Footer";
import Cartcontent from "./Cartcontent";

function Shopcart(prop){
    const value = prop.cartArr;
    return(
        <div className="shop-container">
            <Nav/>
            <Cartcontent arrVal = {value}/>
            <Footer/>
        </div>
    )
}

export default Shopcart;
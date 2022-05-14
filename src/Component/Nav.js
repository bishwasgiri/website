import './style.css';
import {Link} from "react-router-dom";
function Nav(){
    return(
        <div className="navigation">
            <div className="logo">
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>              
            </div>
            <div className="cart">
                <div className="cart-img">
                    <Link to="/Cart"><img src="/Group 35.svg" alt="img" /></Link>                  
                </div>
                <div className="cart-detail">
                    <h6>Shopping Cart</h6>
                </div>
            </div>

        </div>
    )
}

export default Nav;
import './style.css';
import {useState} from 'react';

function Cartcontent(prop){
    const cartVal = prop.arrVal;
    const [counter,setCounter] = useState(0);
    const add = ()=>{
        setCounter(counter + 1);
    }

    const sub = ()=>{
        if(counter > 0 ){
            setCounter(counter - 1)
        }else {
            setCounter(0);
        }
    }

    return(
        <div className="cart-container">
            <div className="table">
                <div className="cart-content">                
                    <div className="table-heading">
                        <div className="prod">Product</div>
                        <div className="desc">Description</div>
                        <div className="price">Price</div>
                        <div className="qty">Quantity</div>
                        <div className="total">Total</div>
                    </div>         
                    {
                        cartVal.map((el) =>(
                            <div className="cart-values" key={el.id}>
                                <div className="cartimg">
                                    <img src={el.imgName} alt="img" />
                                </div>
                                <div className="desc">{el.description}</div>
                                <div className="prices">{el.price}</div>
                                <div className="qty">                                   
                                    <button onClick={sub}>-</button>
                                    <span>{counter}</span>
                                    <button onClick={add}>+</button>
                                </div>
                                <div className="total">{counter*el.price}</div> 
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="cart-total">
                <h4>Sub Total</h4>
                <h4>Tax 13%</h4>
            </div>
        </div>
    )
}

export default Cartcontent;
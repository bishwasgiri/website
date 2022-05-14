import {useState} from 'react';
import './style.css';

function Content(prop){
    const proDetail = prop.content;
    const click = prop.handleClick;
  // console.log(typeof(handleClick));
//   const handleC

    return(
        <div className="product-container">
            <h1>Our Products</h1>
            <div className="displayProduct">
                {proDetail.map((el)=>(
                    <div className="card" key={el.id}>
                        <div className="img-container">
                            <img src={el.imgName} alt="img" />
                            <div className="btn-cart" id={el.id} onClick={click}>Add to Cart</div>
                        </div>
                        <div className="card-desc">
                            <h2 className='cat'>{el.category}</h2>
                            <h4 className='desc'>{el.description}</h4>
                            <h2 className='price'>{el.price}</h2>
                            <h2 className='rating'>{el.rating}</h2>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
        // <Cart/>
    )
}

export default Content;
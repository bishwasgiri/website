import Home from './Component/Home';
import Shopcart from './Component/Shopcart';
import {Switch,Route} from "react-router-dom";
import {useState} from 'react';

function App() {
  const [proDetail,setproDetail] = useState([
      {id:1, imgName: 'hoddie.png',category: 'men',description: 'Essential Hoddie White',price: 6999,rating: 4},
      {id:2, imgName: 'pant.png',category: 'men',description: 'Levis Mens Dark Jeans',price: 2450,rating: 4},
      {id:3, imgName: 'seudeshoes.png',category: 'men',description: 'Dior Chelsea Boots',price: 8000,rating: 4},
      {id:4, imgName: 'shoes.png',category: 'men',description: 'Dr Martin Boots',price: 15200,rating: 4},
      {id:5, imgName: 'converse.png',category: 'men',description: 'Converse Black Chuks',price: 6900,rating: 4},
      {id:6, imgName: 'seudejacket.png',category: 'men',description: 'Zara Suede Jacket',price: 3000,rating: 4},
      {id:7, imgName: 'denimjacket.png',category: 'men',description: 'Levis Jeans Jacket',price:3500,rating: 4},
      {id:8, imgName: 'chain.png',category: 'men',description: 'Mens Arrow Head Necklace',price:300,rating: 4},
  ]);

  const value = [];
  function handleClick(e){
    const val = proDetail.map((el,index,array)=>{
    // push to empty array if id matches
      if(el.id == e.target.id){
        value.push(el);
      }
      })
    // make add to cart button disappear
    e.target.style.display = 'none';
    window.alert('added to cart');
    
  }
  return (
    <div className="App">  
      <Switch>
        <Route exact path="/">
          <Home product ={proDetail} handleclick={handleClick}/>
        </Route>
        <Route path="/Cart">
          <Shopcart cartArr = {value}/> 
        </Route>
      </Switch>            
    </div>
  );
}

export default App;

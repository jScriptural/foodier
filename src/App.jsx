import {useState,useEffect,useContext} from "react";
import data from "./data.js";
import {CartListContext}  from "./context/List.jsx";
import Cart  from "./components/Cart.jsx";
import Card from "./components/Card.jsx";
import Confirmation from "./components/Confirmation.jsx";
 
function App() {
  const cartList = useContext(CartListContext);

  return (
    <section id="container">
      
	<main className="dessert">
	  <header>
	    <h1>Dessert</h1>
	  </header>
	  <div>
	  {data.map((item,index)=>(
	    <Card key={index} keyValue={index} imgUrl={item.image.mobile} altText={item.name} info={{name: item.name,category: item.category, price: item.price, thumbnail: item.image.thumbnail}} />)
	  )}
	  </div>
	</main>
	<div className="cart">
	  <Cart />
	</div>
        {cartList.submitted && (<>
        <div className="confirmation">
	    <Confirmation />
	</div>
	</>)}

      
      
    </section>
  )
}

export default App;
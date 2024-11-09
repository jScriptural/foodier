import {useState,useEffect,useContext} from "react";
import data from "./data.js";
import {CartListContext}  from "./context/List.jsx";
import Cart  from "./components/Cart.jsx";
import Card from "./components/Card.jsx";
import Confirmation from "./components/Confirmation.jsx";
 
function App() {
  const cartList = useContext(CartListContext);
  
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  },[cartList.submitted])
  return (
    <section id="container">
      
	<main className="dessert">
	  <header>
	    <h1>Dessert</h1>
	  </header>
	  {!cartList.submitted && 
	  <div>
	    {data.map((item,index)=>(
	    <Card key={index} keyValue={index} imgUrl={item.image.mobile} altText={item.name} info={{name: item.name,category: item.category, price: item.price, thumbnail: item.image.thumbnail}} />)
	  )}
	  </div>
	  }
	</main>
	{!cartList.submitted && <div className="cart"> 
	    <Cart />
	</div>
	}
        {cartList.submitted && (<>
        <div className="confirmation">
	  <div className="container">
	    <Confirmation />
	  </div>
	</div>
	</>)}

      
      
    </section>
  )
}

export default App;

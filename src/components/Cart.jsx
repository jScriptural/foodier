import {useContext,useEffect,useState} from "react";
import {CartListContext} from "../context/List.jsx";
import icon_removeItem from "/icons/icon-remove-item.svg";
import carbon_neutral from "/icons/icon-carbon-neutral.svg";
import icon_orderCconfirm from "/icons/icon-order-confirmed.svg";
import icon_emptyCart from "/icons/illustration-empty-cart.svg";


function padWithZero(value){
  return value.toString(10).includes(".")?value+"0":value+".00";

}

export default function Cart(props){
  const cartList = useContext(CartListContext);

  let itemCount = 0;
  let totalCost = 0;
  for(let item of Object.values(cartList.list))
  {
    itemCount += item.qty;
    totalCost += (item.qty * item.price);
  }


  return (
    <section id="cart">
      <h1>Your Cart ({itemCount}) </h1>
      {itemCount?(<>
	<div className="item-container">
	{Object.values(cartList.list).map((item,index)=>(
	  <div key={index} className="item">
	    <div className="detail">
	      <span>{item.name}</span>
	      <span><b>{item.qty}x</b> <i>@ ${padWithZero(item.price)}</i> 
		<em>${padWithZero(item.price * item.qty)}</em>
	      </span>
	     </div>
	     <button className="delete-icon" onClick={(evt)=>cartList.removeItem(item.name)}>
	        <img src={icon_removeItem} alt="delete icon" />
	      </button>
	  </div>
	  
	))}
      </div>
      <div className="total"><span>Order Total</span><span>${padWithZero(totalCost)}</span></div>
      <figure className="carbon-neutral">
	<img src={carbon_neutral} />
	<figcaption>This is a <em>carbon neutral</em> delivery</figcaption>
      </figure>
      <div className="confirm-order">
	<button onClick={evt=>
	  {
	    cartList.setSubmitted(true);
	   // window.scrollTo({top: 0,left: 0, behavior: "smooth"});
	  // document.querySelector("body").style.overflow = "hidden";
	  }}>Confirm Order</button>
      </div>
      </>): (
	<figure className="empty-cart">
	  <div> 
	    <img src={icon_emptyCart} alt="cut cake" />
	  </div>
	  <figcaption> Your added items will appear here </figcaption>
	</figure>

      )}

    </section>
  )
}

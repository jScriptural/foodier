import {useContext} from 'react';
import {CartListContext} from "../context/List.jsx";
import icon_orderConfirmed from "/icons/icon-order-confirmed.svg";



export default function Confirmation(props){
  const cartList = useContext(CartListContext);
  let totalCost =0;
  for(let item of Object.values(cartList.list))
    totalCost += (item.qty * item.price);

  //console.log(cartList.submitted);
  return (
      <section id="confirmation">
	<header>
	  <div className="img-con">
	    <img src={icon_orderConfirmed} alt="" />
	  </div>
	  <div className="title">
	    <h1>Order <br/> Confirmed </h1>
	    <p>We hope you enjoy your food!</p>
	  </div>
	</header>
	<div className="item-container">
	{Object.values(cartList.list).map((item,index)=>(
	  <div className="item" key={index}>
	    <img src={item.thumbnail} alt={item.name} />
	    <div className="detail">
	     <p>{item.name}</p>
	     <p><span>{item.qty}x</span> <span>${item.price}</span></p>
	    </div>
	  <p>${item.price * item.qty}</p>
	  </div>
	))}
	  <div className="total">
	    <span>Order Total </span>
	    <span>{totalCost} </span>
	  </div>
	</div>
	<div className="restart">
	  <button>Start New Order </button>
	</div>
    </section>
  )
}


import {useState,useEffect,useContext} from 'react';
import {CartListContext} from '../context/List.jsx';
import incr_icon from '/icons/icon-increment-quantity.svg';
import decr_icon from '/icons/icon-decrement-quantity.svg';
import cart_icon from '/icons/icon-add-to-cart.svg';

export default function Card(props){
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(1);
  const {imgUrl,altText,info,keyValue} = props;

  const cartList = useContext(CartListContext);

// console.log(selection);


   const handleDecrement = (evt)=>{
    if(count > 1)
      setCount(val=>--val);
    else
      setIsActive(false);
  }

  useEffect(()=>{
    if(isActive) {
      cartList.setList({...cartList.list,
        [info.name]: {
	  thumbnail: info.thumbnail,
          name: info.name,
          price: info.price,
          qty: count,
	  setIsActive,
	  setCount,
        },
      })
    } else
      cartList.removeItem(info.name);

    //console.log(cartList.list);
  },[count,isActive])

  return (
    <section id="foodcard" key={keyValue}>
      <figure>
	<img className={isActive?"active":null} src={imgUrl}  alt={altText} />
      <section className="qty-cta">{isActive?(<div className="qty">
	<button className="decr" onClick={handleDecrement} ><img className="icons" src={decr_icon} /></button>
	<span className="display">{count}</span>
	<button className="incr" onClick={(evt)=>setCount(val=>++val)} ><img className="icons" src={incr_icon} /></button>
      </div>): (<button onClick={(evt)=>setIsActive(true)} className="cta"><img className="icons" src={cart_icon} />Add to Cart</button>)
    }</section>
      </figure>
      <div className="info">
	<span className="category">{info.category}</span>
	<span className="name">{info.name}</span>
	<span className="price">${(info.price+"").includes(".")?info.price+"0":info.price+".00"}</span>
      </div>
    </section>
  )
}

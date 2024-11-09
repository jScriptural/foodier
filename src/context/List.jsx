import {useState, createContext} from "react"

const CartListContext = createContext(null);

function CartListProvider({children}){
  const [list, setList] = useState({});
  const [submitted, setSubmitted] = useState(false);

   // console.log(list);
  const removeItem = name=>{
   // console.log(list[name]);
    if(list[name])
    {
      list[name].setIsActive(false);
      list[name].setCount(1);
    }
    delete list[name];
    setList({...list});
  }

  return (
    <CartListContext.Provider value={
      {
	submitted,
	setSubmitted,
	list,
	setList,
	removeItem,
      }}>
      {children}
    </CartListContext.Provider>
  );
}

export {CartListContext, CartListProvider};




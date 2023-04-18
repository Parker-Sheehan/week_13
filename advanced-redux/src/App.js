import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Notification from "./components/UI/Notification";
import {sendCartData, fetchCartData} from './store/cart-actions'

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  },[])


  useEffect(() => {
    if(isInitial){
      isInitial = false
    }

    if(cart.changed === true){
      dispatch(sendCartData(cart))
    }

  }, [cart.items, cart.count]);

  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {!showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

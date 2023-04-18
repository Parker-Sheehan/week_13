import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-6c9d5-default-rtdb.firebaseio.com/cart.json"
      );

      if(!response.ok){
        throw new Error("couldn't fetch data")
      }

      const data = await response.json();

      return data;
    };

    try {
       const cartData = await fetchData()
       console.log(cartData)
       dispatch(cartActions.replaceCart({count: cartData.count, items: cartData.items || []}))
    } catch (error){
        dispatch(
            cartActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching data epic fail'
            })
        )
    }

  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6c9d5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, count: cart.count}),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "success...",
          message: "Sending cart succ!",
        })
      );
    } catch (error) {
      sendCartData().catch((error) => {
        dispatch(
          cartActions.showNotification({
            status: "error",
            title: "error",
            message: "error error",
          })
        );
      });
    }
  };
};

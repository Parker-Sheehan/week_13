import classes from './CartButton.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { cartActions } from '../../store/cart';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const count = useSelector(state => state.cart.count)
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;

import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import styled from "styled-components";
import axios from "axios";
import {response} from "express";


type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  sendPurchase: (clickedItem: CartItemType[]) => void;
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vh;
`
const Button = styled.div`
    min-width: 100px;
    padding: 5px 5px;
    border-radius: 4px;
    border: none;
    background: #20b2aa;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, sendPurchase }) =>
{
  const calculateTotal = (items: CartItemType[]) => {
      items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  }

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems)}</h2>
        <Container>
            <Button
                onClick={ () => sendPurchase(cartItems)}
                data-cy={`purchase-${''}`}
            >
                Purchase</Button>
        </Container>
    </Wrapper>
  )
}

export default Cart;

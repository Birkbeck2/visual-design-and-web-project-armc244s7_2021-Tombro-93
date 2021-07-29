import React from 'react';
import { 
  CartProductWrapper,
  RemoveCartBtn,
  ShopH1, 
  CartHeader,
  ClearCartBtn, 
  CartTotal,
  ProductContainer, 
  ProductNameH3, 
  CartProductImage, 
  ProductPrice,
  QuantityInput,
  PaymentBtn,
  PaymentContainer
 } from './ShopElements';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <ShopH1>Your shopping cart</ShopH1>
      <CartHeader>
      {cart.length > 0 && (
        <ClearCartBtn onClick={clearCart}>Clear Cart</ClearCartBtn>
      )}
      </CartHeader>
      <ProductContainer>
        {cart.map((product, idx) => (
          <CartProductWrapper key={idx}>
            <ProductNameH3>{product.name}</ProductNameH3>
            <CartProductImage src={product.image} alt={product.name} />
            <ProductPrice>£{product.cost}</ProductPrice>
            <QuantityInput
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <RemoveCartBtn onClick={() => removeFromCart(product)}>
              X
            </RemoveCartBtn>
          </CartProductWrapper>
        ))}
         <CartTotal>Total Cost: £{getTotalSum()}</CartTotal>
      </ProductContainer>
      <PaymentContainer>
      <PaymentBtn to='/'>PROCEED TO PAY</PaymentBtn>
      </PaymentContainer>
    </>
  );
}
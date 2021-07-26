import React from 'react';
import { 
  ProductWrapper,
  RemoveCartBtn,
  ShopH1, 
  ClearCartBtn, 
  CartTotal,
  ProductContainer, 
  ProductNameH3, 
  ProductImage, 
  ProductPrice
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
      <ShopH1>Cart</ShopH1>
      {cart.length > 0 && (
        <ClearCartBtn onClick={clearCart}>Clear Cart</ClearCartBtn>
      )}
      <ProductContainer>
        {cart.map((product, idx) => (
          <ProductWrapper key={idx}>
            <ProductNameH3>{product.name}</ProductNameH3>
            <ProductPrice>£{product.cost}</ProductPrice>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <ProductImage src={product.image} alt={product.name} />
            <RemoveCartBtn onClick={() => removeFromCart(product)}>
              Remove
            </RemoveCartBtn>
          </ProductWrapper>
        ))}
      </ProductContainer>

      <CartTotal>Total Cost: £{getTotalSum()}</CartTotal>
    </>
  );
}
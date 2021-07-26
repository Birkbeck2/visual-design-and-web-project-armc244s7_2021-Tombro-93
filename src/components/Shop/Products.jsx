import React, { useState } from 'react';
import { 
  AddToCartBtn,
  ProductContainer,
  ShopH1,
  ProductNameH3,
  ProductPrice,
  ProductImage,
  ProductWrapper
    } from './ShopElements';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      name: 'Converse',
      cost: 59.99,
      image:  require('../../images/hurrache.png').default,
        },
    {
      name: 'Nike Hurrache',
      cost: 59.99,
      image:  require('../../images/hurrache.png').default,
        },
           {
      name: 'New Balance',
      cost: 59.99,
      image:  require('../../images/hurrache.png').default,
        },
    {
      name: 'Nike Hurrache',
      cost: 59.99,
      image:  require('../../images/hurrache.png').default,
        },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

 

  return (
    <>
      <ShopH1>Products</ShopH1>
      <ProductContainer>
        {products.map((product, idx) => (
          <ProductWrapper key={idx}>
            <ProductNameH3>{product.name}</ProductNameH3>
            <ProductPrice>£{product.cost}</ProductPrice>
            <ProductImage src={product.image} alt={product.name} />
            <AddToCartBtn onClick={() => addToCart(product)}>
              Add to Cart
            </AddToCartBtn>
          </ProductWrapper>
        ))}
      </ProductContainer>
    </>
  );
}


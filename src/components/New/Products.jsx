import React, { useState } from 'react';
import { 
  AddToCartBtn,
  ProductContainer,
  ShopH1,
  ProductNameH3,
  ProductPrice,
  ProductImage,
  ProductWrapper
    } from '../Shop/ShopElements';

export default function Products({ setCart, cart }) {
  const [products] = useState([
  
    {
      name: 'Dr Kalpens',
      cost: 95.00,
      image:  require('../../images/dr.png').default,
        },  
   {
      name: 'Suedes',
      cost: 70.00,
      image:  require('../../images/clarks.png').default,
      },
   {
      name: 'Nike Airs',
      cost: 45.00,
      image:  require('../../images/hurrache-teo-01.png').default,
      },
    {
      name: 'Old Balance',
      cost: 50.00,
     image:  require('../../images/nb.png').default,
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
      <ShopH1>The New Sprint Collection</ShopH1>
      <ProductContainer>
        {products.map((product, idx) => (
          <ProductWrapper key={idx}>
            <ProductNameH3>{product.name}</ProductNameH3>
            <ProductImage src={product.image} alt={product.name} />
            <ProductPrice>£{product.cost}</ProductPrice>
            <AddToCartBtn onClick={() => addToCart(product)}>
              Add to Cart
            </AddToCartBtn>
          </ProductWrapper>
        ))}
      </ProductContainer>
    </>
  );
}
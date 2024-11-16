
import React, { useState } from 'react';
import CartIcon from './components/CartIcon'
import ProductList from './components/ProductList';

interface Product {
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  
  const products: Product[] = [
    { name: 'Товар 1', price: 100 },
    { name: 'Товар 2', price: 200 },
    { name: 'Товар 3', price: 300 },
  ];

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index: number) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const discountedPrice = totalPrice * 0.9; // 10% скидка

  return (
    <div className="container mt-5">
      <h1>Корзина покупок</h1>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Товары в корзине</h2>
        <CartIcon itemCount={cartItems.length} />
      </div>

      <div className="mt-4">
        {products.map((product, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center border p-2 mb-2">
            <span>{product.name} - ${product.price.toFixed(2)}</span>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>

      <ProductList products={cartItems} onRemove={removeFromCart} />

      {cartItems.length > 0 && (
        <div className="mt-4">
          <h4>Общая сумма: ${totalPrice.toFixed(2)}</h4>
          <h4>Сумма со скидкой (10%): ${discountedPrice.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default App;


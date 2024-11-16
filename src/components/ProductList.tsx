
import React from 'react';

interface Product {
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  onRemove: (index: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemove }) => {
  return (
    <div className="mt-4">
      <h3>Список товаров в корзине</h3>
      {products.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="list-group">
          {products.map((product, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{product.name} - ${product.price.toFixed(2)}</span>
              <button className="btn btn-danger" onClick={() => onRemove(index)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

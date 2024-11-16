
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface CartIconProps {
  itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={30} />
      <span className="badge bg-primary ms-2">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

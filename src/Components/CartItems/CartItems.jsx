
import React from 'react';
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
        const quantity = cartItems[e.id]; // Use the corrected variable name
        if (quantity && quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{quantity}</button>
                <p>${e.new_price * quantity}</p>
                <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" className='cartitems-remove-icon'/>
              </div>
              <hr/>
            </div>
          );
        }
        return null; // Return null for map when condition is not met
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          {/* Implement logic to calculate totals */}
        </div>
        {/* Subtotal, Shipping, and Total sections */}
        <button>PROCEED TO CHECKOUT</button>
      </div>

      <div className="cartitems-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
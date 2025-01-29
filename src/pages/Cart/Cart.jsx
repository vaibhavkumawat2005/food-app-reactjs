import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigation = useNavigate();

  return (
    <div className="cart">
      <div className="cart-main">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {food_list && food_list.length > 0 ? (
                food_list.map((item) => {
                  if (cartItems[item._id] > 0) {
                    return (
                      <tr key={item._id}>
                        <td>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="cart-item-image"
                          />
                        </td>
                        <td className="cart-item-name">{item.name}</td>
                        <td className="cart-item-price">${item.price.toFixed(2)}</td>
                        <td className="cart-item-quantity">{cartItems[item._id]}</td>
                        <td className="cart-item-total">
                          ${(item.price * cartItems[item._id]).toFixed(2)}
                        </td>
                        <td>
                          <button
                            className="remove-button"
                            onClick={() => removeFromCart(item._id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })
              ) : (
                <tr>
                  <td colSpan={6} className="empty-cart-message">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="cart-sidebar">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <span>Subtotal</span>
              <span>${getTotalCartAmount().toFixed(2)}</span>
            </div>
            <div className="cart-total-details">
              <span>Delivery Fee</span>
              <span>$2.00</span>
            </div>
            <div className="cart-total-details total-amount">
              <strong>Total</strong>
              <strong>${(getTotalCartAmount() + 2).toFixed(2)}</strong>
            </div>
            <button onClick={() => navigation('/order')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
        
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter Promo Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
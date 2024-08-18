import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart} from '../ReduxStore/StoreSlice/CartSlice'
import {clearAllCart} from '../ReduxStore/StoreSlice/CartSlice'

const Cart = () => {
  const allCarts = useSelector((state) => state.cart.carts);
  const dispatch=useDispatch()
  const remove=(payload)=>{
    dispatch(removeFromCart(payload.id))
  }
  const clear=()=>{
    dispatch(clearAllCart())
  }
  return (
    <div className='cart'>
      {allCarts && allCarts.length > 0 ? (
        <>
          <h1 style={{ textAlign: 'center' }}>Cart</h1>
          {allCarts.map((item, index) => (
            <div key={index} className='cart-item'>
              <img src={item.image} alt={item.name} className='cart-item-image' />
              <div className='cart-item-details'>
                <h3 className='cart-item-name'>{item.name}</h3>
                <p  style={{textDecoration:'line-through',fontSize:'20px'}} className='cart-item-old-price'>{item.old_price}</p>
                <p  style={{fontSize:'20px'}} className='cart-item-new-price'>{item.new_price}</p>
              </div>
              <button  style={{cursor:'pointer',marginBottom:'10px'}} className='inner-but' onClick={()=>remove(item)}>Remove</button>
            </div>
          ))}
          <div style={{textAlign:'center',marginTop:'15px'}}>
                <button className='outer-but'  style={{cursor:'pointer',textAlign:'center',border:'1px solid red',marginRight:'auto',marginLeft:'auto'}} onClick={clear}>Clear Cart</button>
                </div>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

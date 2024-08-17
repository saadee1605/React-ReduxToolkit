import React, { useState } from 'react'
import './Product.css'
import all_products from '../Components/Assets/all_product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../ReduxStore/StoreSlice/CartSlice'
const Product = () => {
    const dispatch = useDispatch()
    const [message, setSuccessMessage] = useState('')
    const add = (payload) => {
        dispatch(addToCart(payload));
        setSuccessMessage('Added to cart successfully!');

        // Hide the message after 3 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };
    return (
        <>
            <div className='prod-start' style={{ color: 'green' }}>{message}</div>

            <div className='product'>

                {all_products.map((item, index) => {

                    return <div key={index} className='items' >
                        <div >
                            <img src={item.image} alt="" srcset="" />
                            <div>Name:{item.name}</div>
                            <div style={{textDecoration:'line-through'}}>Old Price:{item.old_price}</div>
                            <div>Old Price:{item.new_price}</div>
                        </div>
                        <button onClick={() => add(item)}>Add To Cart</button>
                    </div>

                })
                }
            </div>
        </>

    )
}

export default Product

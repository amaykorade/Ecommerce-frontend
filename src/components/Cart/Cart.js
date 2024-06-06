import React, { useEffect } from 'react'
import { selectCartItems, selectCartStatus, selectCartError, fetchAsyncCart, removeFromCart } from '../../features/products/cartSlice';
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartStatus = useSelector(selectCartStatus);
    const cartError = useSelector(selectCartError);

    useEffect(() => {
        dispatch(fetchAsyncCart())
    }, [dispatch]);

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    if (cartStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (cartStatus === 'failed') {
        return <div>Error: {cartError}</div>;
    }

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return <div>No items in the cart.</div>;
    }

    return (
        <>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <p> {item._id} </p>
                    <p> {item.productID.name} </p>
                    <p> {item.productID.price} </p>
                    <p> {item.productID.description} </p>
                    <p> {item.productID.category} </p>
                    <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
                </div>
            ))}
        </>

    )

    // const a = renderCartItems.map((b) => (
    //     <div>
    //         {b.name}
    //     </div>
    // ))

    // data.map((item) => {
    //     return (
    //         <>
    //             <div>Cart</div>
    //             <div> {item.productID} </div>
    //         </>
    //     )
    // })

};

export default Cart
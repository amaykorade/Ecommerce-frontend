// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCartItems, selectCartStatus, selectCartError, fetchAsyncCart, removeFromCart, selectCartTotal } from '../../features/products/cartSlice';
// import { createOrder, getKey, selectKey, selectOrderDetails } from '../../features/payment/paymentSlice';
// import { CartStyled } from './Cart.styled';

// function Cart() {
//     const dispatch = useDispatch();
//     const cartItems = useSelector(selectCartItems);
//     const total = useSelector(selectCartTotal);
//     const cartStatus = useSelector(selectCartStatus);
//     const cartError = useSelector(selectCartError);
//     const orderDetails = useSelector(selectOrderDetails);
//     const paymentKey = useSelector(selectKey);

//     // const prodId =
//     console.log("od :", orderDetails);
//     // console.log(paymentKey)
//     useEffect(() => {
//         dispatch(fetchAsyncCart());
//     }, [dispatch]);

//     const handleRemoveItem = (id) => {
//         dispatch(removeFromCart(id));
//     };

//     const handlePayment = async (amount, cartItems) => {
//         try {
//             const orderResponse = await dispatch(createOrder({ amount, cartItems })).unwrap();
//             console.log('Order Response:', orderResponse);

//             const keyResponse = await dispatch(getKey()).unwrap();
//             console.log('Key Response:', keyResponse);

//             // dispatch(createOrder(amount)).then(() => {
//             // dispatch(getKey()).then(() => {
//             const options = {
//                 key: keyResponse,
//                 // amount: orderDetails.amount,
//                 amount: amount * 100,
//                 currency: "INR",
//                 name: "6 Pack Programmer",
//                 description: "Tutorial of RazorPay",
//                 image: "https://avatars.githubusercontent.com/u/25058652?v=4",
//                 order_id: orderDetails.id,
//                 callback_url: "http://localhost:3000/api/payment/paymentverification",
//                 "handler": function (response) {
//                     fetch('http://localhost:3000/api/payment/paymentverification', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//                         },
//                         body: JSON.stringify({
//                             razorpay_payment_id: response.razorpay_payment_id,
//                             razorpay_order_id: response.razorpay_order_id,
//                             razorpay_signature: response.razorpay_signature,
//                             cartItems: cartItems
//                         }),
//                     })
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log('Success:', data);
//                             alert('Payment successful');
//                         })
//                         .catch((error) => {
//                             console.error('Error:', error);
//                             alert('Payment verification failed');
//                         })
//                 },
//                 prefill: {
//                     name: "Gaurav Kumar",
//                     email: "gaurav.kumar@example.com",
//                     contact: "9999999999"
//                 },
//                 notes: {
//                     "address": "Razorpay Corporate Office"
//                 },
//                 theme: {
//                     "color": "#121212"
//                 }
//             };
//             const razor = new window.Razorpay(options);
//             razor.open();
//         } catch (error) {
//             console.error("Payment initiation failed", error);
//             alert('Payment initiation failed');
//         }
//         // });
//         // });



//     };


//     if (cartStatus === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (cartStatus === 'failed') {
//         return <div>Error: {cartError}</div>;
//     }

//     // if (!Array.isArray(cartItems) || cartItems.length === 0) {
//     //     return <div>No items in the cart.</div>;
//     // }

//     return (
//         <>
//             <CartStyled>
//                 <div className='cart-main'>
//                     <h2>Cart</h2>
//                     <div className='items'>
//                         {cartItems.map((item, index) => (
//                             < div key={index} className='card' >
//                                 {item.productID && item.productID.imageUrl ? (
//                                     <img src={`http://localhost:3000/images/${item.productID.imageUrl}`} alt={item.productID.name} />
//                                 ) : (
//                                     <div> No Image Available </div>
//                                 )}
//                                 < div className='info' >
//                                     <p className='name'> {item.productID?.name || "Unknown Product"}</p>
//                                     <p> {item.productID?.price || "Unknown Price"} </p>
//                                 </div>
//                                 <button className='btn1' onClick={() => handleRemoveItem(item._id)}>Remove</button>
//                             </div>
//                         ))}

//                     </div>
//                     <div className='cart-total'>
//                         <p>Total: {total}</p>
//                         <button className='btn2' onClick={() => handlePayment(total, cartItems)}>Pay</button>
//                     </div>

//                 </div >

//             </CartStyled >
//         </>
//     );
// }

// export default Cart;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { selectCartItems, selectCartStatus, selectCartError, fetchAsyncCart, removeFromCart, selectCartTotal } from '../../features/products/cartSlice';
import { createOrder, getKey, selectKey, selectOrderDetails } from '../../features/payment/paymentSlice';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';
import { CartStyled } from './Cart.styled';

const { Meta } = Card;

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    const cartStatus = useSelector(selectCartStatus);
    const cartError = useSelector(selectCartError);
    const orderDetails = useSelector(selectOrderDetails);
    const paymentKey = useSelector(selectKey);

    useEffect(() => {
        dispatch(fetchAsyncCart());
    }, [dispatch]);

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handlePayment = async (amount, cartItems) => {
        // Payment handling logic here
    };

    if (cartStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (cartStatus === 'failed') {
        return <div>Error: {cartError}</div>;
    }

    return (
        <>
            <CartStyled>
                <div className='cart-main'>
                    <h2>Cart</h2>
                    <div className='items'>
                        {cartItems.map((item, index) => (
                            <Card
                                key={index}
                                hoverable
                                style={{ width: 300, margin: '10px' }}
                                cover={
                                    item.productID && item.productID.imageUrl ? (
                                        <img
                                            alt={item.productID.name}
                                            src={`http://localhost:3000/images/${item.productID.imageUrl}`}
                                            style={{
                                                width: '100%',
                                                height: 'auto', // Maintains aspect ratio
                                                maxHeight: '200px', // Ensures the image doesn't exceed the card's height
                                                objectFit: 'cover'
                                            }}
                                        />
                                    ) : (
                                        <div style={{
                                            height: '200px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#f0f0f0'
                                        }}>
                                            No Image Available
                                        </div>
                                    )
                                }
                                actions={[
                                    <Button
                                        type="link"
                                        icon={<DeleteOutlined />}
                                        onClick={() => handleRemoveItem(item._id)}
                                    >
                                        Remove
                                    </Button>,
                                ]}
                            >
                                <Meta
                                    title={item.productID?.name || "Unknown Product"}
                                    description={`₹ ${item.productID?.price || "Unknown Price"}`}
                                />
                            </Card>

                        ))}
                    </div>
                    <div className='cart-total'>
                        <p>Total: ₹ {total}</p>
                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            onClick={() => handlePayment(total, cartItems)}
                            style={{ marginTop: '10px' }}
                        >
                            Pay
                        </Button>
                    </div>
                </div>
            </CartStyled>
        </>
    );
}

export default Cart;



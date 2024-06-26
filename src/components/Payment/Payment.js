// // client/src/components/Payment.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createOrder, selectOrderDetails } from '../../features/payment/paymentSlice';



// const Payment = () => {
//     // const dispatch = useDispatch();
//     // const orderDetails = useSelector(selectOrderDetails);

//     // useEffect(() => {
//     //     dispatch(createOrder(1000)); // Amount in paise (1000 paise = 10 INR)
//     // }, [dispatch]);

//     const displayRazorpay = async (amount) => {
//         const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

//         if (!res) {
//             alert('Razorpay SDK failed to load. Are you online?');
//             return;
//         }

//         const options = {
//             key: 'your-razorpay-key-id',
//             amount: orderDetails.amount,
//             currency: 'INR',
//             name: 'Your Company Name',
//             description: 'Test Transaction',
//             order_id: orderDetails.id,
//             handler: function (response) {
//                 alert(response.razorpay_payment_id);
//                 alert(response.razorpay_order_id);
//                 alert(response.razorpay_signature);
//                 // You can dispatch an action here to update your backend about the successful payment
//             },
//             prefill: {
//                 name: 'Your Name',
//                 email: 'your.email@example.com',
//                 contact: '9999999999',
//             },
//             notes: {
//                 address: 'Razorpay Corporate Office',
//             },
//             theme: {
//                 color: '#3399cc',
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//     };

//     return (
//         <div>
//             <button onClick={() => displayRazorpay(1000)}>Pay Now</button>
//         </div>
//     );
// };

// export default Payment;

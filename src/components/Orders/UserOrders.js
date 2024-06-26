import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders, paymenterror, paymentstatus, userOrders } from '../../features/payment/paymentSlice';
import { UserOrderStyled } from './UserOrders.styled';

function UserOrders() {
    const dispatch = useDispatch();
    const orders = useSelector(userOrders);
    const status = useSelector(paymentstatus);
    const error = useSelector(paymenterror);

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch]);

    if (!orders || orders.length === 0) {
        return <div>No orders found</div>;
    }

    const user = orders[0]?.userID || {};
    const products = orders[0]?.productID || [];
    // console.log(orders[0].productID);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    // if (!Array.isArray(orders) || orders.length === 0) {
    //     return <div>No items in the cart.</div>;
    // }


    return (
        <UserOrderStyled>
            <div className='orders'>
                <h2> Orders</h2>
                <div className='main'>
                    {products.map((product) => (
                        <div className='card'>
                            {product.imageUrl ? (
                                <img src={`http://localhost:3000/images/${product.imageUrl}`} alt={product.name} />
                            ) : (
                                <div> No Image Available </div>
                            )}
                            <div className='info'>
                                <div className='info-product'>
                                    <h3> {product.name} </h3>
                                    <p> {product.price} ₹ </p>
                                    <p> {product.category} </p>
                                    <p> {product.company} </p>
                                </div>
                                <div className='info-user'>
                                    <p>Address - <span> {user.address} </span> </p>
                                    {/* <p>Country</p> */}
                                    <p>State - <span> {user.state} </span> </p>
                                    <p>City - <span> {user.city} </span> </p>
                                    <p>Pin-code - <span> {user.pincode} </span> </p>
                                    <p>Number - <span> {user.number} </span> </p>
                                    <p>Email - <span> {user.email} </span> </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </UserOrderStyled>
    )
}

export default UserOrders
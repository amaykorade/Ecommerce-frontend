import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncProductDetails, getProductDetail, removeSelectedProduct } from '../../features/products/productSlice';

const ProductDetail = () => {
    const { prodId } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getProductDetail);
    // console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncProductDetails(prodId));
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [dispatch, prodId])
    return (
        <div>
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div>
                    <p> {data.name} </p>
                    <p> {data.category} </p>
                    <p> {data.company} </p>
                    <p> {data.inStock} </p>
                    <p> {data.price} </p>
                    {/* <p> {data.name} </p> */}
                    {/* <button onClick={() => addToCart(prodId)}>Add to cart</button> */}
                </div>
            )
            }
        </div>
    );
};

export default ProductDetail;
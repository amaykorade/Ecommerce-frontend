import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncProductDetails, getProductDetail, removeSelectedProduct } from '../../features/products/productSlice';

const ProductDetail = () => {
    const { prodId } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getProductDetail);
    console.log(data)
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
                <div>Details</div>
            )
            }
        </div>
    );
};

export default ProductDetail;
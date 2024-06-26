import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncProductDetails, getProductDetail, removeSelectedProduct } from '../../features/products/productSlice';
import { ProductdetailStyled } from './ProductDetail.styled';
import { addToCart } from '../../features/products/cartSlice';

const ProductDetail = () => {

    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

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

    const handleAddToCart = async (prodId) => {
        try {
            await dispatch(addToCart(prodId)).unwrap();
            alert("Product added to cart successfully!");
        } catch (error) {
            console.error("Failed to add product to cart: ", error);
            alert("Failed to add product to cart. Please try again.");
        }

    }

    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    }

    const imageUrl = `http://localhost:3000/images/${data.imageUrl}`;

    return (
        <ProductdetailStyled>
            <>
                {Object.keys(data).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    // <div>
                    //     <p> {data.name} </p>
                    //     <p> {data.category} </p>
                    //     <p> {data.company} </p>
                    //     <p> {data.inStock} </p>
                    //     <p> {data.price} </p>
                    //     {/* <p> {data.name} </p> */}
                    //     {/* <button onClick={() => addToCart(prodId)}>Add to cart</button> */}
                    // </div>
                    <div className='product'>

                        <img src={imageUrl} alt={data.name} />

                        <div className='info'>
                            <h4> {data.name} </h4>
                            <p id='desc'>
                                {isDescriptionExpanded ? data.description : `${data.description.substring(0, 200)}...`}
                                <button onClick={toggleDescription}>
                                    {isDescriptionExpanded ? 'Show Less' : 'Show More'}
                                </button>
                            </p>
                            <div className='cat-comp'>
                                <p>Category : <span> {data.category} </span> </p>
                                <p>Company : <span> {data.company} </span> </p>
                            </div>
                            <div className='pricing'>
                                <p> {data.price} ₹ </p>
                                <button onClick={() => handleAddToCart(data._id)}> Add to cart </button>
                            </div>

                        </div>
                    </div>
                )
                }
            </>
        </ProductdetailStyled>
    );
};

export default ProductDetail;
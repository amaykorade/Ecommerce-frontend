import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/products/cartSlice';
import { ProductCardStyled } from './ProductCard.styled';


const ProductCard = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    // // console.log(data._id)
    const imageUrl = `http://localhost:3000/images/${data.imageUrl}`;
    // // console.log(imageUrl);
    // const prodId = data._id

    const handleAddToCart = async (prodId) => {
        try {
            await dispatch(addToCart(prodId)).unwrap();
            alert("Product added to cart successfully!");
        } catch (error) {
            console.error("Failed to add product to cart: ", error);
            alert("Failed to add product to cart. Login to add the Products.");
        }

    }


    return (
        <ProductCardStyled>
            <div className='card'>
                {/* <div className='img'> */}
                <img src={imageUrl} alt={data.name} />
                {/* </div> */}

                <div className='info'>
                    <p className='name'> {data.name} </p>
                    <p> {data.price} </p>
                </div>
                <Link to={`/${data._id}`}>
                    <button className='btn1'>See Details</button>
                </Link>

                <button className='btn2' onClick={() => handleAddToCart(data._id)}>Add to cart</button>
            </div>

        </ProductCardStyled>

    );
};

export default ProductCard;


// {/* <div className='card'>
// <div className='img'>
//     {/* <img src={imageUrl} alt={data.name} /> */}
// </div>
// <p className='price'> {data.price} </p>
// <p className='name'> {data.name} </p>
// <Link to={`/${data._id}`}>
//     <button className='details-btn'>See Details</button>
// </Link>
// <button onClick={handleAddToCart}>Add to cart</button>
// </div> */}





{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                <div
                    key={data._id}
                    className="bg-white shadow-md flex flex-col justify-between"
                >
                    <img
                        src={imageUrl}
                        alt={data.name}
                        className="w-full h-auto object-contain"
                    />
                    <div className="flex flex-col justify-center p-4">
                        <h2 className="text-lg font-semibold mb-2 text-center">
                            {data.name}
                        </h2>
                        <p className="text-gray-500 mb-2 text-center">
                            Price: ₹{data.price}
                        </p>
                        <Link to={`/${data._id}`}>
                            <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 self-center">See Details</button>
                        </Link>
                        <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 self-center"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>

            </div> */}
{/* <h1>Product card</h1> */ }
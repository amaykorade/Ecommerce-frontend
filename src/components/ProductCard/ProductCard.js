import React from 'react';
import "./ProductCard.scss"
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { data } = props;
    console.log(data)
    const imageUrl = `http://localhost:3000/images/${data.imageUrl}`;
    console.log(imageUrl);
    return (
        <div className='card'>
            <div className='img'>
                <img src={imageUrl} alt={data.name} />
            </div>
            <p className='price'> {data.price} </p>
            <p className='name'> {data.name} </p>
            <Link to={`/${data._id}`}>
                <button className='details-btn'>See Details</button>
            </Link>

        </div>
    );
};

export default ProductCard;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../features/products/cartSlice';
// import { ProductCardStyled } from './ProductCard.styled';


// const ProductCard = (props) => {
//     const { data } = props;
//     const dispatch = useDispatch();
//     // // console.log(data._id)
//     const imageUrl = `http://localhost:3000/images/${data.imageUrl}`;
//     // // console.log(imageUrl);
//     // const prodId = data._id

//     const handleAddToCart = async (prodId) => {
//         try {
//             await dispatch(addToCart(prodId)).unwrap();
//             alert("Product added to cart successfully!");
//         } catch (error) {
//             console.error("Failed to add product to cart: ", error);
//             alert("Failed to add product to cart. Login to add the Products.");
//         }

//     }


//     return (
//         <ProductCardStyled>
//             <div className='card'>
//                 {/* <div className='img'> */}
//                 <img src={imageUrl} alt={data.name} />
//                 {/* </div> */}

//                 <div className='info'>
//                     <p className='name'> {data.name} </p>
//                     <p> ₹ {data.price} </p>
//                 </div>
//                 <Link to={`/${data._id}`}>
//                     <button className='btn1'>See Details</button>
//                 </Link>

//                 <button className='btn2' onClick={() => handleAddToCart(data._id)}>Add to cart</button>
//             </div>

//         </ProductCardStyled>

//     );
// };

// export default ProductCard;


import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/products/cartSlice';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();
    const imageUrl = `http://localhost:3000/images/${data.imageUrl}`;

    const handleAddToCart = async (prodId) => {
        try {
            await dispatch(addToCart(prodId)).unwrap();
            alert("Product added to cart successfully!");
        } catch (error) {
            console.error("Failed to add product to cart: ", error);
            alert("Failed to add product to cart. Login to add the Products.");
        }
    };

    return (
        <Card
            hoverable
            cover={<img alt={data.name} src={imageUrl} />}
            style={{
                width: 300,
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            actions={[
                <Link to={`/${data._id}`}>
                    <Button type="primary">See Details</Button>
                </Link>,
                <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    onClick={() => handleAddToCart(data._id)}
                >
                    Add to Cart
                </Button>
            ]}
        >
            <Meta title={data.name} description={`₹ ${data.price}`} />
        </Card>
    );
};

export default ProductCard;







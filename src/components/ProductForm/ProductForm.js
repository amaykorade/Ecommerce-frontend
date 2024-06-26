// // import axios from 'axios';
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addProduct } from '../../features/products/productSlice';

// const ProductForm = () => {

//     const dispatch = useDispatch();

//     const [product, setProduct] = useState({
//         name: '',
//         price: 0,
//         description: '',
//         inStock: 0,
//         category: '',
//         company: '',
//     });

//     const [file, setFile] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('name', product.name);
//         formData.append('price', product.price);
//         formData.append('description', product.description);
//         formData.append('inStock', product.inStock);
//         formData.append('category', product.category);
//         formData.append('company', product.company);
//         if (file) {
//             formData.append('imageUrl', file);
//         }
//         console.log(formData);
//         try {
//             dispatch(addProduct(formData));

//             alert('Product added successfully');
//             setProduct({
//                 name: '',
//                 price: 0,
//                 description: '',
//                 inStock: 0,
//                 category: '',
//                 company: '',
//             });
//             setFile(null);
//         } catch (error) {
//             console.error('Error adding product:', error);
//             alert('Failed to add product');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input name="name" value={product.name} onChange={handleChange} placeholder="Name" />
//             <input name="price" value={product.price} onChange={handleChange} placeholder="Price" type="number" />
//             <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" />
//             <input name="inStock" value={product.inStock} onChange={handleChange} placeholder="In Stock" type="number" />
//             <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />
//             <input name="company" value={product.company} onChange={handleChange} placeholder="Company" />
//             <input type='file' onChange={handleFileChange} />
//             <button type="submit">Add Product</button>
//         </form>
//     )
// }

// export default ProductForm
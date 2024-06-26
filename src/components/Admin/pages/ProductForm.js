import React from "react";
import { useState } from "react";

import Sidebar from "../adminComponents/Sidebar";
import Header from "../adminComponents/Header";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import "./Productlisting.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../features/products/productSlice";

export default function ProductForm() {

    const dispatch = useDispatch();

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        inStock: 0,
        category: '',
        company: '',
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;

        if (name === 'name' || name === 'category' || name === 'company') {
            updatedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }

        setProduct((prev) => ({
            ...prev,
            [name]: updatedValue
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('description', product.description);
        formData.append('inStock', product.inStock);
        formData.append('category', product.category);
        formData.append('company', product.company);
        if (file) {
            formData.append('imageUrl', file);
        }
        console.log(formData);
        try {
            dispatch(addProduct(formData));

            alert('Product added successfully');
            setProduct({
                name: '',
                price: 0,
                description: '',
                inStock: 0,
                category: '',
                company: '',
            });
            setFile(null);
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };


    return (
        <>
            <div className="analytics-div-section">
                <Sidebar />
                <div className="admin-pannel-section">
                    <Header title="ADMIN PANEL" pagename="PRODUCT LISTING" />
                    <section className="product-list-section">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-gray-700 font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="description"
                                    className="text-gray-700 font-medium mb-2"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex flex-col w-1/2">
                                    <label
                                        htmlFor="price"
                                        className="text-gray-700 font-medium mb-2"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={product.price}
                                        onChange={handleChange}
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label
                                        htmlFor="quantity"
                                        className="text-gray-700 font-medium mb-2"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="inStock"
                                        value={product.inStock}
                                        onChange={handleChange}
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="image"
                                    className="text-gray-700 font-medium mb-2"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    onChange={handleFileChange}
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-gray-700 font-medium mb-2"
                                >
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={product.category}
                                    onChange={handleChange}
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-gray-700 font-medium mb-2"
                                >
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={product.company}
                                    onChange={handleChange}
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white rounded-md font-medium bg-blue-500"
                            >
                                Add Product
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}
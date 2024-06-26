import React, { useEffect, useState } from "react";
import Header from "../adminComponents/Header.js";
// import { download } from "../assets/index.jsx";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import Sidebar from "../adminComponents/Sidebar.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchAsyncProducts, getAllProducts } from "../../../features/products/productSlice.js";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts) || [];
  console.log(products);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteProduct(productId)).unwrap();
      window.alert('Product deleted successfully');
      dispatch(fetchAsyncProducts());
      setSelectedProduct(null);
    } catch (error) {
      window.alert('Failed to delete product');
    }
  }

  return (
    <>
      <div>
        <div className="flex">
          <Sidebar />
          <div className="w-[calc(100vw-300px)] ml-[300px]">
            <Header title="ADMIN PANEL" pagename="PRODUCTS" />
            <div className="overflow-hidden mt-2.5">
              <form>
                <input
                  type="text"
                  placeholder="search"
                  name="search"
                  className="float-left p-3 border-none mt-0 ml-9 text-lg rounded-lg bg-gray-200 w-[88%] outline-none"
                />
              </form>
            </div>

            <section className="p-2.5 mt-3.5 ml-9 w-[70%] rounded-lg fixed mb-0 grid grid-cols-2 shadow">
              <div className="mt-1 h-[385px] overflow-scroll overflow-x-hidden p-5 mr-7 rounded">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="p-2.5 w-[90%] m-3 bg-gray-100 font-lato rounded-lg border flex justify-between items-center shadow-lg" onClick={() => handleProductClick(product)}
                  >
                    <div className="flex items-center justify-center">

                      <span className="text-left my-1.5 font-bold text-base text-black">
                        Product name - {product.name} <h5 className="text-left ml-0">Product ID - {product._id}</h5>
                      </span>
                    </div>
                    <section>
                      <BiSolidRightArrow className="text-teal-600 text-xl mr-1.5 p-1 bg-cyan-50 rounded-full cursor-pointer" />
                    </section>
                  </div>
                ))}
              </div>

              {selectedProduct && (


                <div className="text-sm p-3 rounded-lg bg-cyan-50 mt-8 flex flex-col items-center w-[420px] h-[300px]">
                  <section className="grid grid-cols-2 ml-3 mt-5.5">
                    <span className="ml-0">
                      <div className="my-2 text-base font-lato">
                        Product Name :
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        Product ID  :
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        Product Category :
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        Quantity :
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        Company :
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        Price :
                        <br />
                      </div>
                    </span>

                    <section className="mx-4">
                      <div className="my-2 text-base font-lato">
                        {selectedProduct.name}
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        {selectedProduct._id}
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        {selectedProduct.category}
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        {selectedProduct.inStock}
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        {selectedProduct.company}
                        <br />
                      </div>
                      <div className="my-2 text-base font-lato">
                        ₹ {selectedProduct.price}
                        <br />
                      </div>
                    </section>
                  </section>
                  <br />
                  <button className=" mx-40 p-1 w-[200px] text-center bg-red-600 text-white font-bold text-base rounded-md" onClick={() => handleDeleteProduct(selectedProduct._id)} >
                    Delete Product
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
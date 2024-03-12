import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BallTriangle as Loader } from "react-loader-spinner";
import "./index.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProductData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

  const renderProductDetails = () => {
    const { title, image, price, rating, description, category } = productData;
    const { rate } = rating;

    return (
      <div className="product-details">
        <div className="text-center">
          <img className="image-section" src={image} alt={title} />
        </div>
        <div className="col-10 m-auto py-3">
          <h2 className="fw-bold">{title}</h2>
          <p>
            <span className="fw-medium">Price:</span> ${price}
          </p>
          <p>
            <span className="fw-medium">Rating:</span> {rate}
          </p>
          <p>
            <span className="fw-medium">Category:</span> {category}
          </p>
          <p className="fw-medium text-decoration-underline">Description:</p>
          <p className="mx-5">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="product-details-container">
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        renderProductDetails()
      )}
    </div>
  );
};

export default ProductDetails;

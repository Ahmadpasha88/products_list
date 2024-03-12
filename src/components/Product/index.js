import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./index.css";

const Product = (props) => {
  const { productData } = props;
  const { id, image, price, title, rating } = productData;
  const { rate } = rating;

  return (
    <Link
      to={`/products/${id}`}
      className="col-10 col-md-5 col-lg-3 m-auto text-decoration-none text-dark"
    >
      <div className="product_card p-3">
        <img className="w-100 card-img" src={image} alt={`item${id}`} />
        <div className="product_details">
          <p className="m-0 my-2 p-0 text-center fw-bold">{title}</p>
          <p className="m-0 p-0 fw-medium">Price: {price}</p>
          <p className="p-0 m-0 d-flex aligin-items-center fw-medium">
            Rating: <FaStar className="text-info fw-bold mt-1 ms-2 " />
            {rate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;

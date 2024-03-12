import { Component } from "react";
import { BallTriangle as Loader } from "react-loader-spinner";

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Product from "../Product";

class ProductsList extends Component {
  state = {
    isLoading: true,
    productsData: [],
  };

  componentDidMount() {
    this.getProductsData();
  }

  getProductsData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    this.setState({ productsData: data, isLoading: false });
  };

  render() {
    const { productsData, isLoading } = this.state;

    return (
      <div className="row col-10 m-auto mt-4 justify-content-center align-items-center gap-3">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <>
            {productsData.map((item) => (
              <Product productData={item} key={item.id} />
            ))}
          </>
        )}
      </div>
    );
  }
}

export default ProductsList;

import React from "react";
import Category from "../Category/Category";
import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import Pagination from "../Pagination/Pagination";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Banner from "../Banner/Banner";

const Home = ({
  handleFilter,
  handleSortByPrice,
  products,
  limit,
  handleChangePage,
}) => {
  return (
    <>
      {/* Banner section */}
      <Banner />
      <div className="app__container">
        <div className="grid wide">
          <div className="row sm-gutter app_content">
            {/* Category bar */}
            <Category />
            {/* Product */}
            <div className="col l-12 m-12 c-12">
              {/* Filter bar */}
              <Filter
                handleFilter={(type) => handleFilter(type)}
                handleSortByPrice={(type) => handleSortByPrice(type)}
              />
              {/* Product list */}
              <Product products={products} />
              {/* Pagination */}
              <Pagination
                products={products}
                limit={limit}
                handleChangePage={(page) => handleChangePage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);

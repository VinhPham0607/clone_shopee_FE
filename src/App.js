import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import config from './config';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./context/CartContext";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      products: [],
      page: 1,
      limit: 20,
      sort: "relevant",
      price: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Typical usage (don't forget to compare props):
    if (
      this.state.search !== prevState.search ||
      this.state.sort !== prevState.sort ||
      this.state.price !== prevState.price ||
      this.state.page !== prevState.page
    ) {
      this.getProducts();
    }
  }

  async getProducts() {
    const { search, page, sort, price } = this.state;
    let url = `${config.baseUrl}/product?search_item=${search}&page=${page}`;
    if (sort) {
      url = `${config.baseUrl}/product?search_item=${search}&page=${page}&sort_by=${sort}`;
    }
    if (price) {
      url = `${config.baseUrl}/product?search_item=${search}&page=${page}&sort=${sort}&price=${price}`;
    }
    const res = await axios.get(url);
    if (res.data) {
      this.setState({
        products: res.data,
      });
    }
  }

  handleFilter(type) {
    this.setState({
      sort: type,
      price: null,
    });
  }

  handleSortByPrice(type) {
    this.setState({
      price: type,
      sort: "relevant",
    });
  }

  handleSearch(searchValue) {
    this.setState({
      search: searchValue,
    });
  }

  handleChangePage(page) {
    this.setState({
      ...this.state,
      page,
    });
  }

  render() {
    return (
      <CartProvider>
        <div className="app">
          {/* Header */}
          {/* Container */}
          <Router>
            <header className="header">
              <div className="grid wide">
                <Navbar />
                {/* Header with search */}
                <div className="header-with-search">
                  <label
                    htmlFor="mobile-search-checkbox"
                    className="header__mobile-search"
                  >
                    <i className="header__mobile-search-icon fa-solid fa-magnifying-glass" />
                  </label>
                  <Logo />
                  <input
                    type="checkbox"
                    hidden
                    id="mobile-search-checkbox"
                    className="mobile-search-checkbox"
                  />
                  <Search handleSearch={this.handleSearch.bind(this)} />
                  {/* Cart layout */}
                  <Cart />
                </div>
              </div>
            </header>
            <Switch>
              <Route exact path="/">
                <Home
                  handleFilter={this.handleFilter.bind(this)}
                  handleSortByPrice={this.handleSortByPrice.bind(this)}
                  products={this.state.products}
                  limit={this.state.limit}
                  handleChangePage={this.handleChangePage.bind(this)}
                />
              </Route>
              <Route
                path="/product/:id"
                component={withRouter(ProductDetail)}
              />
            </Switch>
            {/* Footer */}
            <Footer />
          </Router>
        </div>
      </CartProvider>
    );
  }
}

export default App;

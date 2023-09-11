import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      currentFilter: "relevant",
      currentSort: null,
    };
  }

  handleChangeFilter(type) {
    if (this.state.currentFilter !== type) {
      this.setState({
        currentFilter: type,
        currentSort: null,
      });
      this.props.handleFilter(type);
    } 
  }

  handleSortByPrice(type) {
    this.setState({
      currentSort: type,
    });
    this.props.handleSortByPrice(type);
  }

  render() {
    return (
      <div className="home-filter hide-on-mobile-tablet">
        <span className="home-filter__label">Sắp xếp theo</span>
        <button
          className={`home-filter__btn btn ${
            this.state.currentFilter === "relevant" ? "btn--primary" : ""
          }`}
          onClick={() => this.handleChangeFilter("relevant")}
        >
          Liên Quan
        </button>
        <button
          className={`home-filter__btn btn ${
            this.state.currentFilter === "newest" ? "btn--primary" : ""
          }`}
          onClick={() => this.handleChangeFilter("newest")}
        >
          Mới nhất
        </button>
        <button
          className={`home-filter__btn btn ${
            this.state.currentFilter === "hot_sale" ? "btn--primary" : ""
          }`}
          onClick={() => this.handleChangeFilter("hot_sale")}
        >
          Bán chạy
        </button>
        <div className="select-input">
          {this.state.currentSort ? (
            this.state.currentSort === "ASC" ? (
              <span className="select-input__label active">Giá: Thấp đến Cao</span>
            ) : (
              <span className="select-input__label active">Giá: Cao đến Thấp</span>
            )
          ) : (
            <span className="select-input__label">Giá</span>
          )}
          <i className="select-input__icon fa-solid fa-angle-down" />
          {/* List options */}
          <ul className="select-input__list">
            <li
              className="select-input__item"
              onClick={() => this.handleSortByPrice("ASC")}
            >
              <a href className={`select-input__link ${this.state.currentSort === 'ASC' ? 'active' : ''}`}>
                Giá: Thấp đến Cao
              </a>
            </li>
            <li
              className="select-input__item"
              onClick={() => this.handleSortByPrice("DESC")}
            >
              <a href className={`select-input__link ${this.state.currentSort === 'DESC' ? 'active' : ''}`}>
                Giá: Cao đến Thấp
              </a>
            </li>
          </ul>
        </div>
        <div className="home-filter__page">
          <span className="home-filter__page-num">
            <span className="home-filter__page-current">
              1
            </span>
            /<span className="home-filter__page-total">6</span>
          </span>
          <div className="home-filter__page-control">
            <a href className="home-filter__page-btn">
              <i className="home-filter__page-icon fa-solid fa-angle-left" />
            </a>
            <a href className="home-filter__page-btn">
              <i className="home-filter__page-icon fa-solid fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;

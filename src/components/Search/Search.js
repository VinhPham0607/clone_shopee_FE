/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.historyWrapper = React.createRef();
    this.state = {
      history: [],
      searchValue: '',
      showHistory: false,
      clickedOutside: false,
    };
    this.handleCloseHistory = this.handleCloseHistory.bind(this);
  }
  componentDidMount() {
    this.getHistory();
    document.addEventListener('mousedown', this.handleCloseHistory);
  }

  getHistory() {
    const history = localStorage.getItem("history");
    if(!history) {
      localStorage.setItem("history", JSON.stringify([]));
      this.setState({
        ...this.state,
        history: [],
      });
    } else {
      this.setState({
        ...this.state,
        history: history ? JSON.parse(history) : [],
      });
    }
  }

  handleOnChange(event) {
    this.setState({
      ...this.state,
      searchValue: event.target.value,
    })
  }

  handleSearch(value) {
    const searchValue = typeof value === 'string' ? value : this.state.searchValue;
    this.props.handleSearch(searchValue);
      const history = JSON.parse(localStorage.getItem("history"));
      let newHistory = history ? [...history] : [];
      if(newHistory.length >= 4) {
        newHistory.push(searchValue);
        newHistory.shift()
      } else {
        newHistory = newHistory.concat([searchValue]);
      }
      localStorage.setItem('history', JSON.stringify(newHistory));
      this.setState({
        ...this.state,
        history: newHistory,
      })
  }

  handleClickHistory(value) {
    this.setState({
      ...this.state,
      searchValue: value
    })
    this.handleSearch(value);
  }

  handleOnSubmit(evt) {
    if(evt.keyCode === 13) {
      this.props.handleSearch(this.state.searchValue);
      const history = JSON.parse(localStorage.getItem("history"));
      let newHistory = history ? [...history] : [];
      if(newHistory.length >= 4) {
        newHistory.push(this.state.searchValue);
        newHistory.shift()
      } else {
        newHistory = newHistory.concat([this.state.searchValue]);
      }

      localStorage.setItem('history', JSON.stringify(newHistory));
      this.setState({
        ...this.state,
        history: newHistory,
      })
    }
  }

  handleOpenHistory() {
    this.setState({
      ...this.state,
      showHistory: true,
      clickedOutside: false,
    })
  }

  handleCloseHistory(event) {
    if(event.target?.classList?.[0] === 'history-item' || event.target?.classList?.[0] === 'header__search-input') return;
    if (this.historyWrapper?.current && !this.historyWrapper?.current.contains(event.target)) {
      this.setState({ clickedOutside: true });
    } else {
      this.setState({ clickedOutside: false });
    }
    this.setState({
      ...this.state,
      showHistory: false,
    })
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleCloseHistory);
  }

  render() {
    return (
      <div className="header__search">
        <div className="header__search-input-wrap">
          {/* Header search input */}
          <input
            type="text"
            className="header__search-input"
            placeholder="Tìm Kiếm Sản Phẩm"
            onChange={this.handleOnChange.bind(this)}
            onKeyDown={this.handleOnSubmit.bind(this)}
            onFocus={this.handleOpenHistory.bind(this)}
          />
          {/* History search box */}
          {this.state.showHistory && !this.state.clickedOutside && (
            <div className="header__search-history" ref={this.historyWrapper}>
              <h3 className="header__search-history-heading">
                Lịch Sử Tìm Kiếm
              </h3>
              <ul className="header__search-history-list">
                {this.state.history.map((item) => (
                  <li
                    className="header__search-history-item"
                    onClick={() => this.handleClickHistory(item)}
                  >
                    <a href="#" className="history-item">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          className="header__search-btn"
          onClick={this.handleSearch.bind(this)}
        >
          <i className="header__search-btn-icon fa-solid fa-magnifying-glass" />
        </button>
        {/* Header search suggest */}
        <ul className="header__search-suggest-list hide-on-mobile-tablet">
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Dép
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Áo Phông
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Tủ Lạnh
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Váy
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Máy Giặt
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Áo Khoác
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Áo Thun
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Điều Hòa
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Túi Xách
            </a>
          </li>
          <li className="header__search-suggest-list-item">
            <a href="#" className="header__search-suggest-link">
              Giày
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Search;

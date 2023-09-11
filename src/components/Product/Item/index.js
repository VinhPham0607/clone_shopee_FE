import { Component } from "react";
import { withRouter } from 'react-router-dom';

class ProductItem extends Component {
  renderFavoritedStar(star) {
    return new Array(Math.round(star)).fill(1).map((el) => (
      <i className="home-product-item__star--gold fa-solid fa-star" />
    ));
  }

  renderUnfavoritedStar(star) {
    return new Array(Math.round(star)).fill(1).map((el) => (
        <i className=" fa-solid fa-star" />
    ));
  }

  formatNumber(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
  }

  goToProduct(id) {
    this.props.history.push({
      pathname: `/product/${id}`,
      state: 'data' //You can pass data to the component where you are navigating
    });
  }
  
  render() {
    return (
      <div className="home-product-item" onClick={() => this.goToProduct(this.props.id)}>
        <div
          className="home-product-item__img"
          style={{
            backgroundImage: `url(https://down-vn.img.susercontent.com/file/${this.props.image})`,
          }}
        ></div>
        <h4 className="home-product-item__name">{this.props.name}</h4>
        <div className="home-product-item__price">
          {this.props.price_before_discount > 0 && (
            <span className="home-product-item__price-old">
              {this.formatNumber(this.props.price_before_discount / 100000)}
            </span>
          )}
          <span className="home-product-item__price-current">
            {this.formatNumber(this.props.price / 100000)}
          </span>
        </div>
        <div className="home-product-item__action">
          <div className="home-product-item__rating">
            {this.props.star > 0 &&
              this.renderFavoritedStar(Math.round(this.props.star))}
            {this.renderUnfavoritedStar(5 - Math.round(this.props.star))}
          </div>
          <span className="home-product-item__sold">
            Đã bán {this.props.sold}
          </span>
        </div>
        <div className="home-product-item__origin">
          <span className="home-product-item__city">
            {this.props.shop_location}
          </span>
        </div>
        {this.props.favorited && (
          <div className="home-product-item__favourite">
            <i className="fa-solid fa-check" />
            <span>Yêu thích</span>
          </div>
        )}
        <div className="home-product-item__sale-off">
          <span className="home-product-item__sale-off-percent">
            {this.props.discount}%
          </span>
          <span className="home-product-item__sale-off-label">GIẢM</span>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductItem);
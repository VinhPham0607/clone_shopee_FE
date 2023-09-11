import React, { Component } from "react";
import NoCart from "../../assets/img/no_cart.png";
import useCart from "../../hook/useCart";

const Cart = () => {
  const { items } = useCart();

  const formatPrice = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="header__cart">
      <div className="header__cart-wrap">
        <i className="header__cart-icon fa-solid fa-cart-shopping" />
        <span className="header__cart-notice">{items?.length}</span>
        {/* No cart: header__cart-list--no-cart */}
        <div className="header__cart-list">
          <img
            src={NoCart}
            alt="No cart"
            className="header__cart-no-cart-img"
          />
          <span className="header__cart-no-cart-msg">Chưa có sản phẩm</span>
          <h4 className="header__cart-heading">Sản Phẩm Mới Thêm</h4>
          <ul className="header__cart-list-item">
            {/* Cart item */}
            {
              items && items?.map && items?.map(item => {
                return (
                  <li className="header__cart-item">
                    <img
                      src={`https://down-vn.img.susercontent.com/file/${item?.product?.image}`}
                      alt=""
                      className="header__cart-img"
                    />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <h5 className="header__cart-item-name">
                          {item?.product?.name}
                        </h5>
                        <div className="divheader__cart-item-price-wrap">
                          <span className="header__cart-item-price">{formatPrice(item?.product?.price / 100000)}</span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-qnt">{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <a href="#" className="header__cart-view-cart btn btn--primary">
            Xem Giỏ Hàng
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;

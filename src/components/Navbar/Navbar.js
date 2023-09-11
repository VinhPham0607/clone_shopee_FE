import React, {Component} from 'react';
import QRCode from '../../assets/img/qr_code.png';
import GooglePlay from '../../assets/img/googleplay.png';
import AppStore from '../../assets/img/appstore.png';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return(
            <nav className="header__navbar hide-on-mobile-tablet">
              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <a href="https://banhang.shopee.vn/" className="header__navbar-item-link header__navbar-item--separate">Kênh người bán</a>
                </li>
                <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                  Tải ứng dụng
                  {/* Header QR Code */}
                  <div className="header__qr">
                    <img className="header__qr-img" src={QRCode} alt="QR code" />
                    <div className="header__qr-apps">
                      <a href className="header__qr-link">
                        <img src={GooglePlay} alt="Google Play" className="header__qr-download-img" />
                      </a>
                      <a href className="header__qr-link">
                        <img src={AppStore} alt="Appstore" className="header__qr-download-img" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="header__navbar-item">
                  <span className="header__navbar-title--no-pointer">Kết nối</span>
                  <a href="https://www.facebook.com/ShopeeVN" className="header__navbar-icon-link">
                    <i className="header__navbar-icon fa-brands fa-facebook" />
                  </a>
                  <a href="https://www.instagram.com/Shopee_VN/" className="header__navbar-icon-link">
                    <i className="header__navbar-icon fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
              <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--has-notify">
                  <a href="#" className="header__navbar-item-link">
                    <i className="header__navbar-icon far fa-bell" />
                    Thông báo
                  </a>
                  {/* Header Notification  */}
                  <div className="header__notify">
                    <header className="header__notify-header">
                      <h3>Thông Báo Mới Nhận</h3>
                    </header>
                    <ul className="header__notify-list">
                      <li className="header__notify-item">
                        <a href className="header__notify-link">
                          <img src="https://play-lh.googleusercontent.com/7LnqhbD1ZVX_JO5YfKGYMQb48C2ioy_Po6XscrHLyfvOPaKiSG8jLC4ljzjOxp2nHh8D" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">ĐẠI TIỆC ĐỒNG GIÁ TỪ 9.000Đ</span>
                            <span className="header__notify-description">Quần áo &amp; phụ kiện chỉ 9.000đ - 79.000đ. Voucher Payweek giảm đến 30.000đ. Nhanh tay mua sắm ngay hôm nay!</span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item">
                        <a href className="header__notify-link">
                          <img src="https://play-lh.googleusercontent.com/7LnqhbD1ZVX_JO5YfKGYMQb48C2ioy_Po6XscrHLyfvOPaKiSG8jLC4ljzjOxp2nHh8D" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">FLASH SALE THẦN TỐC - SĂN DEAL SỐC</span>
                            <span className="header__notify-description">Triệu deal giá rẻ chốt liền tay. Mua ngay để săn ưu đãi cực lớn. Đừng bỏ lỡ cơ hội, hành động ngay!</span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item">
                        <a href className="header__notify-link">
                          <img src="https://play-lh.googleusercontent.com/7LnqhbD1ZVX_JO5YfKGYMQb48C2ioy_Po6XscrHLyfvOPaKiSG8jLC4ljzjOxp2nHh8D" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">THỨ 4 HÀNG TUẦN - FREESHIP 0Đ</span>
                            <span className="header__notify-description">Mã Freeship Xtra đến 200.000đ. Miễn phí vận chuyển toàn quốc. Áp dụng ngay, số lượng có hạn!</span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item">
                        <a href className="header__notify-link">
                          <img src="https://play-lh.googleusercontent.com/7LnqhbD1ZVX_JO5YfKGYMQb48C2ioy_Po6XscrHLyfvOPaKiSG8jLC4ljzjOxp2nHh8D" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">GIẢM ĐẾN 50% - DIỆN ĐẸP ĐI CHƠI</span>
                            <span className="header__notify-description">Voucher Payweek giảm 12%. Thời trang &amp; mỹ phẩm giảm 50%. Săn sale thời trang ngay hôm nay!</span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item">
                        <a href className="header__notify-link">
                          <img src="https://play-lh.googleusercontent.com/7LnqhbD1ZVX_JO5YfKGYMQb48C2ioy_Po6XscrHLyfvOPaKiSG8jLC4ljzjOxp2nHh8D" alt="" className="header__notify-img" />
                          <div className="header__notify-info">
                            <span className="header__notify-name">APPLE GIAO NHANH 24H</span>
                            <span className="header__notify-description">Khi mua hàng trước 16h tại HN/HCM. Thêm mã 3 triệu trong ví. Sale hời đến 30%. Chốt đơn 25.7 ngay</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <footer className="header__notify-footer">
                      <a href="#" className="header__notify-footer-btn">
                        Xem tất cả
                      </a>
                    </footer>
                  </div>
                </li>
                <li className="header__navbar-item">
                  <a href="https://help.shopee.vn/vn/s" className="header__navbar-item-link">
                    <i className="header__navbar-icon far fa-circle-question" />
                    Hỗ trợ
                  </a>
                </li>
                {/* <li className="header__navbar-item header__navbar-item--bold header__navbar-item--separate">
                  <Link to="/signup">Đăng ký</Link>
                </li>
                <li className="header__navbar-item header__navbar-item--bold">
                  <Link to="/login">Đăng nhập</Link>
                </li> */}
                <li className="header__navbar-item header__navbar-user">
                  <img src="https://down-vn.img.susercontent.com/file/045a84830d19ec807e23c6ee65462816_tn" alt="" className="header__navbar-user-img" />
                  <span className="header__navbar-user-name">phamvinh6702</span>
                  <ul className="header__navbar-user-menu">
                    <li className="header__navbar-user-item">
                      <a href>Tài Khoản Của Tôi</a>
                    </li>
                    <li className="header__navbar-user-item">
                      <a href>Đơn Mua</a>
                    </li>
                    <li className="header__navbar-user-item header__navbar-user-item--separate">
                      <a href>Đăng Xuất</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
        )
    }
}

export default Navbar;


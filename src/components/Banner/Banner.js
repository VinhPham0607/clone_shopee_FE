import React, {Component} from 'react';
import Carousel from './Carousel';

class Banner extends Component {
    render() {
        return(
          <div className="app__banner">
              <div className="grid wide">
            <div className="row sm-gutter app__banner-content">
              <div className="col l-8 m-12 c-12">
                <Carousel />
              </div>
              <div className="col l-4 m-12">
                <div className="row sm-gutter-tablet">
                  <a href="#" className="col l-12 m-6 full-home-banners__right-link">
                    <div className="full-home-banners__right-img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-c6697c03640d2886d07d9e8961d051cf_xhdpi")' }}>
                    </div>
                  </a>
                  <a href="#" className="col l-12 m-6 full-home-banners__right-link">
                    <div className="full-home-banners__right-img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-027b893667a949fc425189b1b9382217_xhdpi")' }}>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <ul className="app__banner-list">
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Khung Giờ Săn Sale</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Miễn Phí Ship Cho Mọi Đơn</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-11d9732a464d895d3699ca40431d0bfd_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Voucher Giảm Đến 200.000Đ</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Hàng Hiệu Outlet Giảm 50%</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Mã Giảm Giá</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Bắt Trend - Giá Sốc</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Nạp Thẻ, Dịch Vụ &amp; Khách Sạn</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-49f959ff1c532d2c9b5b88a634a656da_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Nhận Free 50.000 Xu</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Hàng Quốc Tế</span>
                </a>
              </li>
              <li className="banner-list__item">
                <a href className="banner-list__link">
                  <div className="banner-list__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi")' }}>
                  </div>
                  <span className="banner-list__title">Gì Cũng Rẻ - Mua Là Freeship</span>
                </a>
              </li>
            </ul>
          </div>
          </div>
        )
    }
}

export default Banner;


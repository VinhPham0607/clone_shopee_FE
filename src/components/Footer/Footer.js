import React, {Component} from 'react';
import QRCode from '../../assets/img/qr_code.png';
import GooglePlay from '../../assets/img/googleplay.png';
import AppStore from '../../assets/img/appstore.png';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
          <div className="grid wide footer__content">
            <div className="row">
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://shopee.vn/blog/" className="footer-item__link">Shopee Blog</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/79090-[Th%C3%A0nh-vi%C3%AAn-m%E1%BB%9Bi]-Shopee-Mall-l%C3%A0-g%C3%AC?previousPage=search%20recommendation%20bar" className="footer-item__link">Shopee Mall</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://banhang.shopee.vn/edu/article/13243/ban-hang-online-bat-dau-tu-dau" className="footer-item__link">Hướng Dẫn Bán Hàng</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/category/59-Thanh-To%C3%A1n/708-V%C3%AD-ShopeePay?page=1" className="footer-item__link">Thanh Toán</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/79144-[Shopee-Xu]-C%c3%a1c-c%c3%a2u-h%e1%bb%8fi-th%c6%b0%e1%bb%9dng-g%e1%ba%b7p" className="footer-item__link">Shopee Xu</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/category/60-%C4%90%C6%A1n-H%C3%A0ng-V%E1%BA%ADn-Chuy%E1%BB%83n/703-%C4%90%C6%A1n-h%C3%A0ng?page=1" className="footer-item__link">Vận Chuyển</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/79258-Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-C%e1%ba%a9m-nang-Tr%e1%ba%a3-h%c3%a0ng-ho%c3%a0n-ti%e1%bb%81n" className="footer-item__link">Trả Hàng &amp; Hoàn Tiền</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/79191-%5BD%E1%BB%8Bch-v%E1%BB%A5%5D-L%C3%A0m-sao-%C4%91%E1%BB%83-li%C3%AAn-h%E1%BB%87-Ch%C4%83m-s%C3%B3c-Kh%C3%A1ch-h%C3%A0ng" className="footer-item__link">Chăm Sóc Khách Hàng</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee" className="footer-item__link">Chính Sách Bảo Hành</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Về Shopee</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="https://careers.shopee.vn/about" className="footer-item__link">Giới Thiệu Về Shopee Việt Nam</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://careers.shopee.vn/jobs" className="footer-item__link">Tuyển Dụng</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/77242" className="footer-item__link">Điều Khoản Shopee</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://help.shopee.vn/portal/article/77244" className="footer-item__link">Chính Sách Bảo Mật</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://shopee.vn/mall/" className="footer-item__link">Chính Hãng</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://banhang.shopee.vn/" className="footer-item__link">Kênh Người Bán</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://shopee.vn/flash_sale/" className="footer-item__link">Flash Sales</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://shopee.vn/affiliate/" className="footer-item__link">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                  </li>
                  <li className="footer-item">
                    <a href="#" className="footer-item__link">Liên Hệ Với Truyền Thông</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Thanh Toán</h3>
                <ul className="footer-list row">
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" /></a>
                  </li>
                </ul>
                <h3 className="footer__heading">Đơn Vị Vận Chuyển</h3>
                <ul className="footer-list row">
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6" /></a>
                  </li>
                  <li className="footer-item col l-4 m-4 c-4">
                    <a href="#" className="footer-item__link"><img src="https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd" /></a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="https://www.facebook.com/ShopeeVN" className="footer-item__link">
                      <i className="footer-item__icon fa-brands fa-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.instagram.com/Shopee_VN/" className="footer-item__link">
                      <i className="footer-item__icon fa-brands fa-instagram" />
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFyOJY71m5O-QAAAYmRO58YIyz2IWKIEejllXf_5347bt3iC_tU2ivvIbZ9kqX9TbLaiojmA0kolzBjGJ9TBNaFFh_7BoVb1gC3GlUEhIV_G4EU2x_YafqidGGHSz3Xk3iAiQc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fshopee" className="footer-item__link">
                      <i className="footer-item__icon fa-brands fa-linkedin" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
                <div className="footer__download-none">
                  <h3 className="footer__heading">Tải Ứng Dụng Shopee Ngay Thôi</h3>
                  <div className="footer__download">
                    <a href="https://shopee.vn/web"><img className="footer__download-qr" src={QRCode} alt="Download QR" /></a>
                    <div className="footer__download-apps">
                      <a href="https://shopee.vn/web" className="footer__download-app-link">
                        <img src={GooglePlay} alt="Google Play" className="footer__download-app-img" />
                      </a>
                      <a href="https://shopee.vn/web" className="footer__download-app-link">
                        <img src={AppStore} alt="Appstore" className="footer__download-app-img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-2-4 m-8 c-12">
                <div className="footer__download-block">
                  <h3 className="footer__heading">Tải Ứng Dụng Shopee Ngay Thôi</h3>
                  <div className="footer__download">
                    <a href="https://shopee.vn/web"><img className="footer__download-qr" src={QRCode} alt="Download QR" /></a>
                    <div className="footer__download-apps">
                      <a href="https://shopee.vn/web" className="footer__download-app-link">
                        <img src={GooglePlay} alt="Google Play" className="footer__download-app-img" />
                      </a>
                      <a href="https://shopee.vn/web" className="footer__download-app-link">
                        <img src={AppStore} alt="Appstore" className="footer__download-app-img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="grid wide">
              <p className="footer_text">© 2023 Shopee. Tất cả các quyền được bảo lưu. </p>
            </div>
          </div>
        </footer>
        )
    }
}

export default Footer;


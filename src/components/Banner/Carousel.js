import React, { useState, useEffect } from 'react';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    'https://cf.shopee.vn/file/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-55725be23e08b239a4f3208caa6b1f99_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-f7b2e32c28b62c946fa4e494b3dfa645_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-a5eda01ab33443192186852dbcfd97b7_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-1373acc41b5c547639cafab692b6f9d9_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b8f6784f8fb001851573f1fd15509382_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-0dc1caa625b26f6e9015de9b1db7ca86_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-a57c024040707a928c54e4bd10485f99_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-61875310b584d6447e2353fb3bfb7dd7_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-4fb448518b94be455ffe391ec664ae96_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-fd22dcb962db44b391f45e1ee9c97b64_xxhdpi',
  ];
  const lengthCarousel = carouselItems.length;
  const intervalDuration = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = (activeIndex + 1) % lengthCarousel;
      setActiveIndex(newIndex);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, lengthCarousel]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const handleLeftButtonClick = () => {
    let newIndex = (activeIndex - 1 + lengthCarousel) % lengthCarousel;
    setActiveIndex(newIndex);
  };

  const handleRightButtonClick = () => {
    let newIndex = (activeIndex + 1) % lengthCarousel;
    setActiveIndex(newIndex);
  };

  return (
    <div className="full-home-banners__main">
      <div className="full-home-banners__main-inner">
        {carouselItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`full-home-banners__main-item ${
              index === activeIndex ? 'active' : ''
            }`}
          >
            <img src={item} alt="" />
          </a>
        ))}
      </div>
      <div className="full-home-banners__main-controls">
        <i className="carosel-btn-left fa-solid fa-angle-left" onClick={handleLeftButtonClick} />
        <i className="carosel-btn-right fa-solid fa-angle-right" onClick={handleRightButtonClick} />
      </div>
      <div className="full-home-banners__main-indicators">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`full-home-bannders__main-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

import React, { useState } from "react";

const ImageViewer = ({ activeImage, setActiveImage, product }) => {

  const handlePrevActiveImage = () => {
    setActiveImage(prev => prev === 0 ? 0 : prev - 1);
  }

  const handleNextActiveImage = () => {
    setActiveImage((prev) => (prev === product?.images?.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="modal-image-bg">
      <div style={{ width: 1156, height: 880 }} className="modal-image-viewer">
        <div className="grid">
          <div className="row">
            <div className="col c-8">
              <div className="image-full">
                <picture>
                  <img
                    src={`https://down-vn.img.susercontent.com/file/${product?.images[activeImage]}`}
                    alt="preview"
                    style={{ width: "100%", height: "100%" }}
                  />
                </picture>
                <div
                  className="prev-btn image-view-btn"
                  onClick={handlePrevActiveImage}
                >
                  <i class="fa-solid fa-angle-left"></i>
                </div>
                <div
                  className="next-btn image-view-btn"
                  onClick={handleNextActiveImage}
                >
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
            <div className="col c-4">
              <div>
                <p className="product-name">{product.name}</p>
                <ul className="image-list">
                  {product?.images &&
                    product?.images?.map((el, idx) => (
                      <li key={idx} className={`image-item ${activeImage === idx ? 'active' : ''}`} onClick={() => setActiveImage(idx)}>
                        <img
                          src={`https://down-vn.img.susercontent.com/file/${el}`}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;

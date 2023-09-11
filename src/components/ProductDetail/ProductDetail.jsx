import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { useParams } from "react-router-dom";
import { ReactComponent as SVGSieuRe } from "../../assets/sieure.svg";
import Gurantee from "../../assets/guarantee.png";
import ImageViewer from "./ImageViewer";
import { Carousel } from "react-responsive-carousel";
import useCart from "../../hook/useCart";
import { AddProductSuccessedPopup } from "./AddProductSuccessedPopup";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./index.css";

const ProductDetail = () => {
    const { addProduct } = useCart();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [openImage, setOpenImage] = useState(false);
    const [addProductSuccessed, setAddProductSuccessed] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(`${config.baseUrl}/product?id=${id}`);
            setProduct(res.data);
        };

        getProduct();
    }, [id]);

    document.addEventListener("click", (e) => {
        if (openImage && e?.target?.classList.contains("modal-image-bg")) {
            setOpenImage(false);
        }
    });

    const renderFavoritedStar = (star = 0) => {
        return new Array(Math.round(star)).fill(1).map((el) => <i className='home-product-item__star--gold fa-solid fa-star' />);
    };

    const renderUnfavoritedStar = (star = 0) => {
        console.log('star', star);
        return new Array(Math.round(star)).fill(1).map((el) => <i className='fa-solid fa-star' />);
    };

    const formatNumber = (number) => {
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + "K";
        }
        return number.toString();
    };

    const formatPrice = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "VND",
        });
    };

    const showAddProductSuccessedPopup = () => {
        setAddProductSuccessed(true);

        setTimeout(() => {
            setAddProductSuccessed(false);
        }, 2000);
    };

    function zoom(e) {
        var x;
        var y;
        var zoomer = e.currentTarget;
        x = (e.clientX / zoomer.offsetWidth) * 200;
        y = (e.clientY / zoomer.offsetHeight) * 200;
        zoomer.style.backgroundPosition = x + "% " + y + "%";
    }

    if (!product) return <></>;

    return (
        <div 
            style={{
                background: "#f5f5f5",
                padding: "10% 0 20px 0",
                borderRadius: 8,
                // marginTop: "150px",
            }}
        >
            <div className='grid wide' style={{ background: "#fff" }}>
                <div className='product-detail-wrapper'>
                    <div className='row'>
                        <div className='col c-5'>
                            <div className='product-preview'>
                                <div className='product-slider'>
                                    <Carousel
                                        showIndicators={false}
                                        showStatus={false}
                                        showArrows={true}
                                        swipeable={true}
                                        renderArrowPrev={(clickHandler) => (
                                            <button onClick={clickHandler} className='slider-btn left'>
                                                <i class='fa-solid fa-angle-left'></i>
                                            </button>
                                        )}
                                        renderArrowNext={(clickHandler) => (
                                            <button onClick={clickHandler} className='slider-btn right'>
                                                <i class='fa-solid fa-angle-right'></i>
                                            </button>
                                        )}
                                    >
                                        {product?.images?.map((el, idx) => (
                                            <div
                                                class='zoom'
                                                style={{ backgroundImage: `url(https://down-vn.img.susercontent.com/file/${el})` }}
                                                onClick={() => {
                                                    if (!openImage) {
                                                        setOpenImage(true);
                                                    }
                                                    setActiveImage(idx);
                                                }}
                                                onMouseMove={zoom}
                                            >
                                                <img src={`https://down-vn.img.susercontent.com/file/${el}`} style={{ width: "100%" }} alt='preview' />
                                            </div>
                                            // <div
                                            //   onClick={() => {
                                            //     if (!openImage) {
                                            //       setOpenImage(true);
                                            //     }
                                            //     setActiveImage(idx);
                                            //   }}
                                            // >
                                            //   <img
                                            //     src={`https://down-vn.img.susercontent.com/file/${el}`}
                                            //     style={{ width: "100%" }}
                                            //     alt="preview"
                                            //   />
                                            // </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className='col c-7'>
                            <div className='product-detail-wrapper'>
                                <div className='product-name'>{product?.name}</div>
                                <div className='product-information'>
                                    <div className='product-vote'>
                                        <span>{product?.star}</span>
                                        {product?.star > 0 && renderFavoritedStar(Math.round(product?.star))}
                                        {renderUnfavoritedStar(5 - Math.round(product?.star))}
                                    </div>
                                    <div className='product-view'>
                                        <span>{formatNumber(product?.view_count)}</span>
                                        Views
                                    </div>
                                    <div className='product-sold'>
                                        <span>{formatNumber(product?.sold)}</span>
                                        Sold
                                        <i class='fa-regular fa-circle-question'></i>
                                    </div>
                                </div>
                                <div className='product-price-wrapper'>
                                    <div className='product-price-section'>
                                        {product?.price_before_discount > 0 && <div className='product-price-original'>{formatPrice(product?.price_before_discount / 100000)}</div>}
                                        <div className='product-price'>{formatPrice(product?.price / 100000)}</div>
                                        {product?.discount > 0 && <div className='product-discount'>{product?.discount}% OFF</div>}
                                    </div>
                                    <div className='product-slogan flex items-center'>
                                        <div className=''>
                                            <SVGSieuRe />
                                        </div>
                                        <div className='slogan-wrapper'>
                                            <div className='slogan-top'>
                                                Lowest Price
                                                <i class='fa-regular fa-circle-question'></i>
                                            </div>
                                            <div className='slogan-bottom'>The best offer for this product on Shopee!</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product-quantity-wrapper'>
                                    <span>Quantity</span>
                                    <div className='produc-quantity-selection flex items-center'>
                                        <div className='flex items-center' style={{ borderTop: "1px solid #e5e7eb" }}>
                                            <button className='quantity-select-btn' onClick={() => setQuantity((prev) => (prev - 1 < 1 ? 1 : prev - 1))}>
                                                <i class='fa-solid fa-minus'></i>
                                            </button>
                                            <div>
                                                <input type='number' min={1} className='produc-quantity-selection-input' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                                            </div>
                                            <button className='quantity-select-btn' onClick={() => setQuantity((prev) => (prev + 1 > product?.stock ? prev : prev + 1))}>
                                                <i class='fa-solid fa-plus'></i>
                                            </button>
                                        </div>
                                        <span>{product?.stock} pieces available</span>
                                    </div>
                                </div>
                                <div className='product-group-btn'>
                                    <div
                                        className='btn another-btn btn-light'
                                        onClick={() => {
                                            addProduct(product, quantity);
                                            showAddProductSuccessedPopup();
                                        }}
                                    >
                                        <i class='fa-solid fa-cart-plus'></i>
                                        Add to cart
                                    </div>
                                    <div className='btn another-btn btn-main'>Buy now</div>
                                </div>
                                <div className='product-guarantee'>
                                    <div className='flex items-center product-guarantee-wrapper'>
                                        <div className='flex items-center product-guarantee-wrapper-left'>
                                            <img src={Gurantee} alt='guarentee' />
                                            <span>shopee guarantee</span>
                                        </div>
                                        <span>Get the items you ordered or get your money back.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openImage && <ImageViewer product={product} activeImage={activeImage} setActiveImage={setActiveImage} />}
            {addProductSuccessed && <AddProductSuccessedPopup />}
        </div>
    );
};

export default ProductDetail;

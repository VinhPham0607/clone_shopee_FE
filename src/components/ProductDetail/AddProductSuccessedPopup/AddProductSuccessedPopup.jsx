import React from "react";

import "./style.css";
import checkIcon from "../../../assets/check.png";
const AddProductSuccessedPopup = () => {
    return (
        <div className='add-product-successed-container'>
            <div className='add-product-successed-modal'>
                <div className='add-product-successed-icon ratio-64x64'>
                    <img src={checkIcon} alt='' className='w-100' />
                </div>
                <div className='add-product-successed-text'>
                    <p>Sản phẩm đã được thêm vào Giỏ hàng</p>
                </div>
            </div>
        </div>
    );
};

export default AddProductSuccessedPopup;

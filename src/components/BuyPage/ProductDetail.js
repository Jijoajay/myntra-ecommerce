import React from 'react'
import { CiViewList } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { IoHeart } from "react-icons/io5";
import { ProductImages } from './ProductImages';

export const ProductDetail = ({selectedRating, handleRatingChange,product}) => {

  return (
    <>
        <div className='product-details'>
            {product.productDetails.map((det,index)=>(
                <>
                {console.log("dlt",det)}
                <div className='title' key={index}>
                    <h3>PRODUCT DETAIL</h3>
                    <p> <CiViewList size={20}/></p>
                </div>
                <p>{det.product_material_detail}</p>
                <div className='Size-Fit'>
                    <h3>Size & Fit</h3>
                    <div>
                        {det["size&fit"].map((siz, index)=>{
                            <p key={index}>{siz.title}</p>
                        })}
                    </div>
                </div>
                <div className='Size-Fit'>
                    <h3>Material & Care</h3>
                    <div>
                        {det["material&care"].map((mat,id)=>(
                            <p key={id}>{mat.title}</p>
                        ))}
                    </div>
                    </div>
                </>
            ))}
        </div>
        <hr />
        <div className='product-ratings'>
            <div className="title">
                <h3>RATING </h3>
                <p><IoHeart size={20} /></p>
            </div>
            <div className='rating-detail'>
                <div className='ratings-number'>
                    <div className='number'>
                        <h1>4.3</h1>
                        <p><IoHeart size={24}/></p>
                    </div>
                    <div className='buyersCount'>
                        1.2k Verified Buyers
                    </div>
                </div>
                <div className='rating-range'>
                    {
                        [5, 4, 3, 2, 1].map((rating) => (
                        <div
                            key={rating}
                            className={`rating-item ${selectedRating === rating ? 'selected' : ''}`}
                            onClick={() => handleRatingChange(rating)}
                        >
                            {rating}
                        </div>
                    ))}
                </div>
            </div>
            <div className='product-reviews-photos'>
                <h4>Customer Photos (total count)</h4>
                <div className='product-review-img'>
                    <ProductImages images={product.images}/>
                </div>
            </div>
            <hr />
            <div className="product-reviews-photos">
                <h4>Customer reviews(total Count)</h4>
                <div className='comment'>
                    <div className='star-icon'><IoHeart/></div>
                    <div className='message'>
                        <p>This is my very first purchase of blazer, I can say wao myntra kamal kr diya. Absolutely satisfied with product. Most important point is this product is in blazer cover. Myntra packaging is awesome. Go ahead. As i mentioned it was my very first purchase so I have no idea about price range</p>
                        <div className="product-review-img">
                            <ProductImages images={product.images}/>
                        </div>
                        <div className='commenter-like'>
                            <p> Myntra Customer | 18 Dec 2023 </p>
                            <div className='like'>
                                <p><SlLike /> 1</p>
                                <p><SlDislike /> 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    </>
  )
}

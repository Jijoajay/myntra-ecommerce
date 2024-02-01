import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import _debounce from "lodash/debounce"
import { Carousel } from '../navbar/Carousel';
import { IoIosHeart } from "react-icons/io";

export const ProductCard = ({isProductDetail, category, handleAddToWishList, wishList}) => {
  
  const [isHover, setIsHover] = useState(Array(category.length).fill(false))
  const wishListId = wishList?.map((item)=>item.productId)

  const handleMouseEnter = (id) => {
    setIsHover((prevIsHover) => {
      const newHoverStates = [...prevIsHover];
      newHoverStates[id] = true;
      return newHoverStates;
    });
  };

  const handleMouseLeave = _debounce((id) => {
    setIsHover((prevIsHover) => {
      const newHoverStates = [...prevIsHover];
      newHoverStates[id] = false;
      return newHoverStates;
    });
  }, 100);

  return (
    <>
      {category && category.length > 0 && category.map( (cat,index)=>(
      <Link to={`${isProductDetail ? `/buyProduct/${cat.id}` : `/product/${cat.cateogoryName}`}`} style={{textDecoration:"none", width:"210px"}} >
          <div className={`${ isProductDetail ? "productCard-containers" : "productCard-container"}`} key={index} onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)} >
              <div className={`${isProductDetail ? "img-containers" : "img-container"}`}>
                {isProductDetail ? isHover[index] ? (
                    <Carousel carousel={cat.images} isProductDetail={true}/>
                  ):(
                  <img src={cat.img || cat.thumbImg} />
                ):<img src={cat.img || cat.thumbImg} />}
              </div>
              {isProductDetail && !isHover[index] ? (
                <p className="ratings"> 4.5 <TiStarFullOutline size={16}/> | 19.4k</p>
              )
              : "" }
              <div className={`${isProductDetail ?'detail-containers': "detail-container"}`}>
                {isProductDetail ? ( isHover[index] ? (
                  <>
                    <div className='wishlist-productCard' onClick={(e)=>e.preventDefault()}>
                      {Boolean(wishListId?.includes(cat.id)) ? 
                      <>
                        <IoIosHeart   size={20} className='heart-active-icon'/>
                        <p>WISHLISTED</p>
                      </>
                      :
                      <>
                        <IoIosHeartEmpty size={20} className='heart-icon'/>
                        <p onClick={()=>handleAddToWishList(cat.id)}>WISHLIST</p>
                      </>
                      }
                    </div>
                    <p className='size'>sizes: {cat.size[0]}</p>
                    <h4>{isProductDetail ? "₹"+ cat.offerPrice : "Shop Now"}</h4>
                  </>
                ):
                (
                  <>
                  <h4>{cat.brandName}</h4>
                  <p className='descrip'>{cat.description}</p>
                  <h4>{isProductDetail ? "₹"+ cat.offerPrice : "Shop Now"}</h4>
                  </>
                )) : 
                  (
                    <>
                    <h4>{cat.cateogoryName}</h4>
                    <h3>{cat.offer}</h3>
                    <h4>{isProductDetail ? cat.offerPrice : "Shop Now"}</h4>
                    </>
                  )
                }
              </div>
          </div>
      </Link>
      ))}
    </>
  )
}

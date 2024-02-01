import React,{useEffect, useState} from 'react'
import { GoDotFill } from "react-icons/go";
import { ProductCard } from '../home/ProductCard';

export const Carousel = ({carousel,isProductDetail}) => {
  const [imgIndex, setImgIndex] = useState(0)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImgIndex((prevImg) => (prevImg === carousel.length - 1 ? 0 : prevImg + 1));
    }, 5000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  },[imgIndex]);
  
  const selectImage = (id) => {
    if (id !== imgIndex) {
      setImgIndex(id);
    }
  };
  return (
    <div>
      <div className='carousel-container' unselectable='on' style={{paddingTop:(isProductDetail ? "0rem" : "3rem"),height:(isProductDetail ? "auto": "" )}}>
          {carousel.map((img, index) => (
            <article key={index} className={`${index === imgIndex ? "actives" : "active-hidden"}`}>
              <div className={`${isProductDetail ? "carousel-product-img":"carousel-img"}`}>
                <img src={img.img || img.image} alt={img.alt} />
              </div>
            </article>
          ))}
      </div>
      <div className={`${isProductDetail ? "productDot" : "dot"}`} >
        {carousel.map((_, id) => (
          <GoDotFill size={isProductDetail ? 13 : 18} key={id} onClick={()=>selectImage(id)} className={`${id === imgIndex ? "dot-active" : "not-active"}`} />
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const BrandProductCard = ({carousel, title, explore, product}) => {
    const mappedTitle = title.split("")
  return (
    <div className='brand-medal'>
    <h2>
        {mappedTitle.map((word)=>(
            <p>{word}</p>
        ))}
    </h2>
    <section className={`${ explore ? "exploreProductCard-container"  : product ? "ProductContainer" : "brandProductCard-container"}`}>
        {
            carousel.map((item,index)=>(
                <>
                <Link to={`/product/${item.cateogoryName}`} className='link' key={index}>
                    <div className={`${explore ? "exploreProductCard" : product ? "productCard" :"brandProductCard" }`}>
                            <div className='brandProductCard-img'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={`${product ? "productCard-content": 'brandProductCard-content'}`}>
                                {product ? 
                                <>
                                    <p>{item.cateogoryName}</p>
                                    <p>{item.offer}</p>
                                    <p>+Explore</p>
                                </>
                                : <>
                                    <h1>Brand Logo</h1>
                                    <h1>Offer</h1>
                                </>}
                            </div>
                    </div>
                </Link>
                </>
            ))
        }
    </section>
    </div>
  )
}

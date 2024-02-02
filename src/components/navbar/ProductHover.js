import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ProductHover = ({ cate, product }) => {
    const [uniqueCategory, setUniqueCategory] = useState([])
    useEffect(() => {
        const filteredCategory = new Set(product?.filter((item)=> item.ProductTo === cate).map((item) => item.clothingType))
        setUniqueCategory(Array.from(filteredCategory))
    },[cate, product])

    return (
        <Fragment>
            <div className="category-cont">
                {uniqueCategory.map((cat) => (
                    <div key={cat} className='hover-product'>
                        <h4>{cat}</h4>
                        <div className='category-Link'>
                            {[...new Set(product
                                .filter((item) => item.ProductTo === cate && item.clothingType === cat)
                                .map((filteredItem) => filteredItem.name || filteredItem.category))]
                                .map((uniqueName) => (
                                    <Link to={`/product/${uniqueName}`} className='link' key={uniqueName}>
                                        <p>{uniqueName}</p>
                                    </Link>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

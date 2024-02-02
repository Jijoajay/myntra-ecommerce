import React from 'react'

export const ProductImages = ({images}) => {
  return (
    <>
        {images.map((i,index)=>(
            <img src={i.image} key={index} alt='product'/>
        ))}
    </>
    )
}

import React from 'react'
import { ProductCard } from '../home/ProductCard'
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export const ProductShower = ({selectedBrand,handleRemove, 
    filterCheckProduct, product, handleAddToWishList, wishList}) => {
  return (
    <div className='productShower'>
        <div className='productNav'>
            <div className='static-nav'>
            <div className='navGroups'>
                <p>Bundles <IoMdArrowDropdown /></p>
                <p>Country of orgin <IoMdArrowDropdown /></p>
                <p>Size <IoMdArrowDropdown /></p>
            </div>
            <div className='sortBy'>
                <p>sort by: <span>Popularity</span> <IoMdArrowDropdown /></p>
            </div>
            </div>
            <div className='selectedItem-container'>
                {selectedBrand.map((pro,index)=>(
                <div className='selectedItem'>
                    <p key={index}  >
                    {pro}
                    </p>
                    <p><RxCross2 onClick={()=>handleRemove(pro)}/></p>
                </div>
                ))}
            </div>
        </div>
        <div className='product-container' >
            <ProductCard 
            product={product}
            wishList={wishList}
            isProductDetail={true} 
            category={filterCheckProduct} 
            handleAddToWishList={handleAddToWishList}
            />
        </div>
    </div>
  )
}

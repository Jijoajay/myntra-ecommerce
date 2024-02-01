import React,{useState} from 'react'
import { ProductCard } from '../home/ProductCard'
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export const ProductShower = ({selectedBrand,handleRemove, 
    filterCheckProduct, product, handleAddToWishList, wishList, 
    dropDownContent, setDropDownContent}) => {
        const [isDropDownHover, setIsDropDownHover] = useState(false)
  return (
    <div className='productShower'>
        <div className='productNav'>
            <div className='static-nav'>
            <div className='navGroups'>
                <p>Bundles <IoMdArrowDropdown /></p>
                <p>Country of orgin <IoMdArrowDropdown /></p>
                <p>Size <IoMdArrowDropdown /></p>
            </div>
            <div className={"sortBy-container"} onMouseEnter={()=>setIsDropDownHover(true)} onMouseLeave={()=>setIsDropDownHover(false)}>
                <div className='sortby'>
                    <p>sort by: <span>{dropDownContent}</span></p>
                    <p ><IoMdArrowDropdown /></p>
                </div>
                {isDropDownHover &&
                    <div className="sortBy-active">
                        <p onClick={()=>setDropDownContent("Recommended")}>Recommended</p>
                        <p onClick={()=>setDropDownContent("What's New")}>What's New</p>
                        <p onClick={()=>setDropDownContent("Popularity")}>Popularity</p>
                        <p onClick={()=>setDropDownContent("High to Low")}>High to Low</p>
                        <p onClick={()=>setDropDownContent("Low to High")}>Low to High</p>
                        <p onClick={()=>setDropDownContent("Customer Rating")}>Customer Rating</p>
                    </div>
                }
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

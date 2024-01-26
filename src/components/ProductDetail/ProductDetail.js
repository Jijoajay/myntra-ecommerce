import React, { useMemo, useState } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom';
import { SideBar } from './SideBar';
import { ProductShower } from './ProductShower';
// import { IoMdArrowDropup } from "react-icons/io"; use this arrow when the particular container is active
export const ProductDetail = ({product, handleAddToWishList, wishList}) => {
  const {categoryName} = useParams()
  const [selectedProduct, setSelectedProduct] = useState([])
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [lastOffer, setLastOffer] = useState("");

  const filteredProduct = useMemo(() => {
    return product.filter((cate) =>
      (cate.category && cate.category.toLowerCase().includes(categoryName.toLowerCase())) ||
      (cate.name && cate.name.toLowerCase().includes(categoryName.toLowerCase()))
    );
  }, [product, categoryName]);

  const filterByBrands = useMemo(() =>{
    if(selectedBrand.length === 0)return filteredProduct;
    return filteredProduct.filter((pro)=>selectedBrand.includes(pro.brandName))
  },[filteredProduct, selectedBrand])
  
  const discountPercent = (oldPrice, offerPrice)=>{
    return Math.ceil(((oldPrice - offerPrice)/oldPrice)*100)
  }
  const filterByColor = useMemo(()=>{
    if(selectedColor.length === 0)return filterByBrands;
    return filterByBrands.filter((item)=>selectedColor.includes(item.color))
  },[filterByBrands, selectedColor])

  const filterByDiscount = useMemo(()=>{
    if(selectedOffer.length === 0)return filterByColor;
    return filterByColor.filter((item)=>discountPercent(item.oldPrice, item.offerPrice) <= selectedOffer)
  },[filterByColor, selectedOffer])
  
  const filterCheckProduct = useMemo(()=>{
    if(selectedProduct.length === 0){return filterByDiscount;}
    return filterByDiscount.filter((pro)=> selectedProduct.includes(pro.name))
  },[filterByDiscount, selectedProduct])

  const handleRemove = (item)=>{
    if(selectedBrand.includes(item)){
      const updatedBrand = [...selectedBrand]
      const index = updatedBrand.indexOf(item)
      updatedBrand.splice(index,1)
      setSelectedBrand(updatedBrand)
    }else if(selectedProduct.includes(item)){
      const updatedProduct = [...selectedProduct]
      const index = updatedProduct.indexOf(item)
      updatedProduct.splice(index,1)
      setSelectedProduct(updatedProduct)
    }
  }
  

 
  return (
    <main>
        <section className='topic-section'>
            <h2>Topic </h2>
            <p> - {filterCheckProduct.length} items</p>
        </section>
       
        <section className='shower'>
            <SideBar 
            categoryName={categoryName}
            selectedOffer={selectedOffer}
            selectedBrand={selectedBrand}
            selectedColor={selectedColor}
            filterByBrands={filterByBrands}
            selectedProduct={selectedProduct}
            filteredProduct={filteredProduct}
            setSelectedColor={setSelectedColor}
            setSelectedBrand={setSelectedBrand}
            setSelectedOffer={setSelectedOffer}
            setSelectedProduct={setSelectedProduct}
            />
            <ProductShower 
            handleAddToWishList={handleAddToWishList}
            selectedBrand={selectedBrand}
            handleRemove={handleRemove}
            wishList={wishList}
            filterCheckProduct={filterCheckProduct}
            product={product}
            />
        </section>
    </main>
  )
}

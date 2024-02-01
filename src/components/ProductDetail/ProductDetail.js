import React, { useMemo, useState } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom';
import { SideBar } from './SideBar';
import { ProductShower } from './ProductShower';

export const ProductDetail = ({product, handleAddToWishList, wishList}) => {
  const {categoryName} = useParams()
  const [lastOffer, setLastOffer] = useState("");
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([])
  const [dropDownContent, setDropDownContent] = useState("Recommended")

  const handleClickClearAll = ()=>{
    setSelectedBrand([])
    setSelectedColor([])
    setSelectedOffer([])
    setSelectedProduct([])
  }

  const filteredProduct = useMemo(() => {
    if (!categoryName) return product; 
    const lowercaseCategoryName = categoryName.toLowerCase();
    return product.filter(item => 
      (lowercaseCategoryName.includes(item.brandName.toLowerCase())) ||
      (lowercaseCategoryName.includes(item.category.toLowerCase())) ||
      (lowercaseCategoryName.includes(item.description.toLowerCase())) ||
      (item.color && item.color.toLowerCase().includes(lowercaseCategoryName)) ||
      (item.name && item.name.toLowerCase().includes(lowercaseCategoryName)) 
    );
  }, [product, categoryName]);

  const filterByBrands = useMemo(() =>{
    console.log("starting")
    if(selectedBrand.length === 0)return filteredProduct;
    return filteredProduct.filter((pro)=>selectedBrand.includes(pro.brandName))
  },[filteredProduct, selectedBrand,handleClickClearAll])
  
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

  const filterProductBySortByCategory = useMemo(()=>{
    if(dropDownContent === "Recommended")return filterCheckProduct
    else if(dropDownContent==="High to Low") return filterCheckProduct.sort((a,b)=>b.offerPrice - a.offerPrice)
    else if(dropDownContent==="Low to High") return filterCheckProduct.sort((a,b)=>a.offerPrice - b.offerPrice)
  })

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
            handleClickClearAll={handleClickClearAll}
            />
            <ProductShower 
            dropDownContent={dropDownContent}
            setDropDownContent={setDropDownContent}
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

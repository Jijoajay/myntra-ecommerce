import React, { useEffect, useState } from 'react'

export const SideBar = ({selectedBrand, setSelectedBrand, selectedProduct, 
    setSelectedProduct, filterByBrands, filteredProduct, handleFilterByDiscount
  ,setSelectedColor, selectedColor, selectedOffer, setSelectedOffer, handleClickClearAll}) => {

      const [uniqueBrand, setUniqueBrand] = useState([]);
      const [uniquecolor, setUniqueColor] = useState([]);
      const [uniqueCategory, setUniqueCategory] = useState([]);
        useEffect(()=>{
            const productToMap = selectedBrand.length > 0 ? filterByBrands : filteredProduct
            const categorySet = new Set(productToMap.map((cate)=>cate.name))
            setUniqueCategory(categorySet)
            const brandSet = new Set(filteredProduct.map((brand)=>brand.brandName))
            setUniqueBrand(brandSet)
            const colorSet = new Set(filteredProduct.map((item)=>item.color))
            setUniqueColor(colorSet)
          },[filteredProduct, filterByBrands,selectedBrand.length])
        
          const handleFilterCheck = (item)=>{
            const updatedProduct = [...selectedProduct]
            const index = updatedProduct.indexOf(item)
            if(index === -1){
              updatedProduct.push(item)
            }else{
              updatedProduct.splice(index,1)
            }
            setSelectedProduct(updatedProduct)
          }
          const hanldeBrandCheck = (item)=>{
            const updatedProduct = [...selectedBrand]
            const index = updatedProduct.indexOf(item)
            if(index === -1){
              updatedProduct.push(item)
            }else{
              updatedProduct.splice(index,1)
            }
            setSelectedBrand(updatedProduct)
          }

          const handleColorCheck = (item)=>{
            const updatedColor = [...selectedColor]
            const index = updatedColor.indexOf(item)
            if(index === -1){
              updatedColor.push(item)
            }else{
              updatedColor.splice(index,1)
            }
            setSelectedColor(updatedColor)
          }

          const handleDiscountCheck = (item)=>{
            const updatedDiscount = [...selectedOffer]
            const index = updatedDiscount.indexOf(item)
            if(index === -1){
              if(selectedOffer.length > 0){
                updatedDiscount.splice(0,1)
                updatedDiscount.push(item)
              }else{
                updatedDiscount.push(item)
              }
            }else{
              updatedDiscount.splice(index,1)
            }
            setSelectedOffer(updatedDiscount)
          }
          let count = 0
          

  return (
    <div className='sidebar'>
              <div className='productNavs'>
                <h4>Filters</h4>
                <h4 className='clear' onClick={handleClickClearAll}>CLEAR ALL</h4>
              </div>
              <div className='sidebar-items'>
                  <div className='items categories'>
                    <h4>CATEGORIES</h4>
                      {Array.from(uniqueCategory).map((product)=>(
                    <div className='item category'>
                      <>
                        <input type="checkbox" 
                        value={product}
                        checked={filteredProduct.length <= 1 ?  true :selectedProduct.includes(product)} 
                        onChange={()=>handleFilterCheck(product)}/>
                        <p>{product}</p>
                      </>
                    </div>
                      ))}
                  </div>
                  <div className='items brand'>
                    <h4>BRANDS</h4>
                    {Array.from(uniqueBrand).map((brandName)=>(
                      <div className='item brand'>
                        <>
                          <input type="checkbox" 
                          value={brandName}
                          checked={selectedBrand.includes(brandName)}
                          onChange={()=>hanldeBrandCheck(brandName)}
                          />
                          <p>{brandName}</p>
                        </>
                      </div>
                    ))}
                  </div>
                  <div className='items price'>
                    <h4>PRICE</h4>
                    <div className='item prices'>
                      <input type="checkbox" />
                      <p>Rs 100 to Rs 200 </p>
                    </div>
                  </div>
                  <div className='items color'>
                    <h4>COLOR</h4>
                    {Array.from(uniquecolor).map((color,index)=>(
                       <div className='item color' key={index}>
                       <>
                         <input type="checkbox"
                         value={color}
                         checked={selectedColor.includes(color)}
                         onChange={()=>handleColorCheck(color)}
                         />
                         <div className='color-div'>
                          <p style={{backgroundColor:color}} className='round' ></p>
                          <p>{color}</p>
                         </div>
                       </>
                     </div>
                    ))}
                  </div>
                  <div className='items discount'>
                    <h4>DISCOUNT</h4>
                    {
                      [...Array(9)].map((_,index)=>(
                        <div className='item discount ' key={index}>
                          <input type="checkbox"

                          checked={selectedOffer.includes((index+1)* 10)} 
                          value={(index+1)* 10}
                          onChange={()=>handleDiscountCheck((index+1)*10)}
                          />
                          <p>{count+=10}% and above</p>
                        </div>
                    ))
                    }
                  </div>
              </div>
            </div>
  )
}

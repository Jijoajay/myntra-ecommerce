import React from 'react'
import "./ProductDetail.css"
import { ProductCard } from '../home/ProductCard'
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from 'react-router-dom';

// import { IoMdArrowDropup } from "react-icons/io"; use this arrow when the particular container is active
export const ProductDetail = ({product}) => {
  console.log("product",product)
  const {categoryName} = useParams()
  console.log("categoryName", categoryName)
  const filteredProduct = product.filter((cate)=>cate.category.toLowerCase() === categoryName.toLowerCase());
 

  return (
    <main>
        <section className='topic-section'>
            <h2>Topic </h2>
            <p> - 10 items</p>
        </section>
       
        <section className='shower'>
            <div className='sidebar'>
              <div className='productNavs'>
                <p>Filters</p>
                <p>CLEAR ALL</p>
              </div>
              <div className='sidebar-items'>
                  <div className='items categories'>
                    <p>CATEGORIES</p>
                      {filteredProduct.map((product)=>(
                    <div className='item category'>
                      <>
                        <input type="checkbox" />
                        <p>{product.name}</p>
                      </>
                    </div>
                      ))}
                  </div>
                  <div className='items brand'>
                    <p>BRANDS</p>
                    {filteredProduct.map((product)=>(
                      <div className='item brand'>
                        <>
                          <input type="checkbox" />
                          <p>{product.brandName}</p>
                        </>
                      </div>
                    ))}
                  </div>
                  <div className='items price'>
                    <p>PRICE</p>
                    <div className='item prices'>
                      <input type="checkbox" />
                      <p>Rs 100 to Rs 200 </p>
                    </div>
                  </div>
                  <div className='items color'>
                    <p>COLOR</p>
                    <div className='item color'>
                      <input type="checkbox" />
                      <p>White</p>
                    </div>
                  </div>
                  <div className='items discount'>
                    <p>DISCOUNT</p>
                    <div className='item discount '>
                      <input type="checkbox" />
                      <p>10% to 20% off</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className='productShower'>
                <div className='productNav'>
                  <div className='navGroups'>
                    <p>Bundles <IoMdArrowDropdown /></p>
                    <p>Country of orgin <IoMdArrowDropdown /></p>
                    <p>Size <IoMdArrowDropdown /></p>
                  </div>
                  <div className='sortBy'>
                    <p>sort by: <span>Popularity</span> <IoMdArrowDropdown /></p>
                  </div>
                </div>
                <div className='product-container' >
                    <ProductCard isProductDetail={true} category={filteredProduct} product={product}/>
              </div>
            </div>
        </section>
    </main>
  )
}

import React from 'react'
import "./Home.css"
import { Carousel } from '../navbar/Carousel'
import { ProductCard } from './ProductCard'
export const Home = ({carousel, category}) => {
  return (
    <main className='homePage'>
        <section>
            <Carousel  carousel={carousel}/>
        </section>
        <section className='product-section'>
            <div className='category-title'>
                <h2>Shop by Category</h2>
            </div>
            <div className="product-container">
                <ProductCard category={category} isProductDetail={false}/>
            </div>
            <div className='blank'></div>
        </section>
    </main>
  )
}
import React from 'react'
import "./Home.css"
import { Carousel } from '../navbar/Carousel'
import { ProductCard } from './ProductCard'
import { CollectiveCarousel } from './CollectiveCarousel'

export const Home = ({carousel, category, carouselBase}) => {
  return (
    <main className='homePage' unselectable='on'>
        <section>
            <Carousel  carousel={carousel}/>
        </section>
        <section className='product-section'>
            <CollectiveCarousel 
            category={category.generalCategory}
            title={"MEDAL WORTHY BRANDS TO BAG"}
            />
            <CollectiveCarousel
            global={true}
            title={"GRAND GLOBAL BRANDS"}
            category={carouselBase}
            />
            <div className='category-title'>
                <h2>S H O P B Y C A T E G O R Y</h2>
            </div>
            <div className="product-container">
                <ProductCard category={category.generalCategory} isProductDetail={false}/>
            </div>
            <div className='blank'></div>
        </section>
    </main>
  )
}
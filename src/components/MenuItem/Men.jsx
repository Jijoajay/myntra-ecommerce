import React from 'react'
import { Carousel } from '../navbar/Carousel'
import {BrandProductCard} from "./BrandProductCard"
import "./Men.css"

export const Men = ({carousel,women, category}) => {
  return (
    <main className='men-page'>
        <Carousel carousel={carousel}/>
        <BrandProductCard
        title={"BIGGEST DEALS ON TOP BRAND"} 
        carousel={carousel}/>
        <BrandProductCard 
        explore={true}
        carousel={carousel}
        title={"EXPLORE TOP BRANDS"} 
        />
        <BrandProductCard
        product={true} 
        carousel={women ? category.femaleIndianwear : category.mensIndianWearCategory}
        title={"TRENDING IN INDIAN WEAR"} 
        />
        <BrandProductCard 
        product={true}
        carousel={women? category.femaleSportsWear : category.mensSportCategory}
        title={"TRENDING IN SPORTS WEAR"} 
        />
        {women &&
        <BrandProductCard 
        product={true}
        carousel={category.generalCategory}
        title={"TRENDING IN WESTERN WEAR"} 
        />
        }

    </main>
  )
}

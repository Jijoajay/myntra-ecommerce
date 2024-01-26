import React, { Fragment, useEffect, useState } from 'react'
import fetch from '../../api/fetch'
import { Link } from 'react-router-dom'

export const ProductHover = ({cate}) => {
    const [hoverCategory, setHoverCategory] = useState([])
    const [uniqueCategory, setUniqueCategory] = useState([])
    useEffect(()=>{
        const fetchHoverItem = async()=>{
            const response = await fetch.get('/hoverItems')
            setHoverCategory(response.data)
        }
        fetchHoverItem();
        
    },[])
    useEffect(()=>{
        const category = new Set(hoverCategory.map((cate)=>cate.category))
        setUniqueCategory(Array.from(category))
    },[hoverCategory])
  return (
    <Fragment >
      <div className="category-cont">
        {uniqueCategory.map((cate) => (
          <div key={cate} className='hover-product'>
            <h4>{cate}</h4>
            <div className='category-Link'>
              {hoverCategory
                .filter((item) => item.category === cate)
                .map((filteredItem) => (
                    <Link to={`/product/${filteredItem.name}`}><p key={filteredItem.id}>{filteredItem.name}</p></Link>
                  
                ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

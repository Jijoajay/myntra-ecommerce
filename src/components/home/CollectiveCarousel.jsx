import React, {useState} from 'react'
import { GoDotFill } from "react-icons/go";

export const CollectiveCarousel = ({category, title, global}) => {
    const mappedTitle = title.split('')
    const [startIndex, setStartIndex] = useState(0)
    const dotLength = Math.ceil(category?.length / 5)
    
    setTimeout(() => {
        const nextIndex = category.length <= startIndex + 5 ? 0 : startIndex + 5
        setStartIndex(nextIndex)
    }, global ? 3000 : 5000);

    const handleClick=(id)=>{
        let nextIndex = id * 5
        setStartIndex(nextIndex)
    }
  return (
    <div className='medal-worthy-brand'>
        <h2>
            {mappedTitle.map((word)=>(
                <p>{word}</p>
            ))}
        </h2>
        <div className='collective-carousel' >
            <>
                {
                    category?.slice(startIndex, startIndex + 5).map((item)=>(
                        <div className='carousel-productCard'>
                            <div className='carousel-img-container'>
                                <img src={item.img} alt=""  />
                            </div>
                            <div className='carousel-content-container'>
                                <p>{item.offer}</p>
                                <p>S H O P N O W</p>
                            </div>
                        </div>
                    ))
                }
            
            </>
        </div>
        <div className="carousel-dot">
            {[...Array(dotLength || 0)].map((_, id) => (
                <GoDotFill size={18} key={id} 
                className={startIndex / 5 === id ? 'dot-active' : 'not-active'} 
                onClick={()=>handleClick(id)}/>
            ))}
        </div>
    </div>
  )
}

import React from 'react'
import "./WishLists.css"
import { RxCross1 } from "react-icons/rx";

export const Wishlists = ({wishList, 
handleRemoveFromWishList,product}) => {
    const productId = wishList.map((list)=> list.productId)
    const filteredWishListItem = product.filter((item)=>productId.includes(item.id))
  return (
    <main>
        <section className='wishList-container'>
            <div>
                <h3>My WishList</h3><p>{filteredWishListItem.length} items</p>
            </div>
            { filteredWishListItem.map((item)=>(
                <div className='wislist-products'>
                    <div>
                        <div className='wishlist-img'>
                            <p className='wishList-cross' onClick={()=>handleRemoveFromWishList(item.id)}><RxCross1 size={22}/></p>
                            <img src={item.thumbImg}/>
                        </div>
                        <div className='wishList-detail'>
                            <p>{item.description}</p>
                            <p className='off'>{Math.ceil(((item.oldPrice - item.offerPrice)/item.oldPrice) * 100) }%OFF</p>
                             
                        </div>
                        <div className='wishlist-button'>
                            <button> MOVE TO BAG </button>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    </main>
  )
}

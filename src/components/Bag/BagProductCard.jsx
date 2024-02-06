import React, {useContext, useState} from 'react'
import { DataContext } from '../../context/DataContext'
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

export const BagProductCard = ({bagId,filteredProducts,selected, setSelected}) => {
    const {bagProduct,setBagProduct,handleAddToWishList} = useContext(DataContext)
    const [isRemove, setIsRemove] = useState( bagProduct ? Array(bagProduct.length).fill(false): [])
    const bag = bagProduct.map((bag)=>bag)
    const handleCheckBoxChange = (productId)=>{
        if(selected.includes(productId)){
            setSelected(selected.filter((id)=> id !== productId))
        }else{
            moveToTop(productId)
            setSelected([...selected,productId])
        }
    }
    const handleCheckAll = ()=>{
        if( selected.length === filteredProducts.length){
            setSelected([])
        }else{
            setSelected(bagId)
        }
    }
    const moveToTop = (productId)=>{
        const index = filteredProducts.findIndex((pro)=> pro.id === productId);
        const selectedProduct = filteredProducts[index]
        filteredProducts.splice(index,1)
        filteredProducts.unshift(selectedProduct)
    }
    const handleDelete = async(id)=>{
        try {
            await fetch.delete(`/bag/${id}`)
            const updatedProduct = bagProduct.filter((item)=>item.productId !== id)
            setBagProduct(updatedProduct)
            handleClickRemove(id)
        } catch (error) {
            console.log("error at removing the bag product",error.message)
        }
    }
    
    
    const handleClickRemove = (id)=>{
        setIsRemove((prevState)=>{
            const newIsRemoveData = [...prevState]
            newIsRemoveData[id] = !prevState[id];
            return newIsRemoveData
        })
    }
    const handleRemoveMultipleItem = async()=>{
        if(selected.length === 0)return null
        try {
            await Promise.all(selected.map((item)=>{
                handleClickRemove(item)
            }))
            setSelected([])
        } catch (error) {
            
        }
    }
    const handleAddMultipleItem = async()=>{
        if(selected.length === 0)return null
        await Promise.all(selected.map((item)=>{
            handleAddToWishList(item)
            handleClickRemove(item)
        }))
    }
  return (
    <>
        <div className='checkout-items'>
            <div>
                <input type="checkbox"
                onChange={()=>handleCheckAll()}/>
                <p>{selected.length}/{bag.length}</p>
                <h4>Items Selected</h4>
            </div>
            <div className='remove-wishlist'>
                <p onClick={()=>handleRemoveMultipleItem()}>Remove</p>
                <p>|</p>
                <p onClick={()=>handleAddMultipleItem()}>Move to wishlist</p>
            </div>
        </div>
            {
                filteredProducts.map((pro)=>(
                    <>
                    <div className='cloth-container'>
                        <div className='cloth-detail'>
                            <div className='cloth-content'>
                                <div>
                                    <input type="checkbox" 
                                    className='cloth-check' 
                                    checked={selected.includes(pro.id)}
                                    onChange={()=>handleCheckBoxChange(pro.id)}/>
                                    <img src={[pro.thumbImg]} alt="" />
                                </div>
                                <div>
                                    <h3>{pro.brandName}</h3>
                                    <p>{pro.description}</p>
                                    <p>sold by: retailer name</p>
                                    <div className='size-quantity'>
                                        <h4>Size:{bag.size}</h4>
                                        <h4>Quantity:{bag.quantity}</h4>
                                    </div>
                                    <div className='price-offer'>
                                        <p>₹{pro.offerPrice}</p>
                                        <p className='span'>₹{pro.oldPrice}</p>
                                        <p className='off'>{Math.ceil(((pro.oldPrice - pro.offerPrice)/pro.oldPrice) * 100) }%OFF</p>
                                    </div>
                                    <p><IoReturnDownBackOutline /> 7 days return available</p>
                                    <p><TiTick /> Delivery by 24 Jan</p>
                                </div>
                            </div>
                            <div>
                                <p onClick={()=>handleClickRemove(pro.id)}><RxCross1 /></p>
                            </div>
                            {isRemove[pro.id] &&
                                <div className='remove-container'>
                                    <div className='remove-img-container'>
                                        <img src={pro.thumbImg} alt="" />
                                        <div>
                                            <h4>Move from bag</h4>
                                            <p>Are you sure you want to remove this item from bag ?</p>
                                        </div>
                                        <p onClick={()=>handleClickRemove(pro.id)}><RxCross1 /></p>
                                    </div>
                                    <div className='remove-buttons'>
                                        <button onClick={()=>handleDelete(pro.id)}>Remove</button>
                                        <button className='wishlist' onClick={()=>handleAddToWishList(pro.id)}>Move to Wislists</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    </>
                ))
            }
    </>
  )
}

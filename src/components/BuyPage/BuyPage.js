import React, {useEffect, useState} from 'react'
import "./BuyPage.css"
import { FaShoppingBag } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { ProductImages } from './ProductImages';
import { ProductDetail } from './ProductDetail';
import { ProductCard } from '../home/ProductCard';
import { useParams } from 'react-router-dom';
import fetch from '../../api/fetch';

export const BuyPage = ({category,product, setBagProduct,bagProduct,
    pinCode,setPinCode, gotPin,setGotPin,wishList,handleAddToWishList }) => {
    
    const {id} = useParams();
    const pincodePattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    const filteredProduct = product.find((prod)=>prod.id.toString() === id.toString());
    const filteredCategory = product.filter((item)=>item.name === filteredProduct.name && item.id !== filteredProduct.id)
    const [selectedRating, setSelectedRating] = useState(5);
    const [isItemInBag, setItemInBag] = useState(false)
    const [isItemInWishList, setItemInWishList] = useState(false)
    const [size, setSize] = useState(null)
    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
      };
    const handlePinCheck = ()=>{
        if(gotPin){
            setGotPin(false)
            setPinCode(null)
        }else{
            if (pinCode === " "){
                alert("Please fill out the pincode input first to check")
            }
            else{
                if(!pincodePattern.test(pinCode)){
                    alert("Please enter a valid pin code")
                }else{
                    setGotPin(true)
                }
            }
        }
    }
    useEffect(()=>{
        const checkItemInBag = ()=>{
            const bag = bagProduct.find((pro)=>pro.productId === Number(id))
            setItemInBag(Boolean(bag))
        }
        checkItemInBag();
    },[bagProduct,id])

    useEffect(()=>{
        const checkItemInList = ()=>{
            const list = wishList.find((list)=>list.productId === (Number(id)))
            setItemInWishList(Boolean(list))
        }
        checkItemInList();
    },[wishList])
    
    const addToBag = async(product_id)=>{
        try {
            const bagId = bagProduct.length ? (bagProduct.length) + 1 : 1;
            const newItem = {
                id:bagId,
                productId:product_id,
                quantity:1,
                size:size
            }
            const response = await fetch.post('/bag',newItem)
            setBagProduct([...bagProduct , newItem]);
        } catch (error) {
            console.log("error",error)
        }
    }

  return (
    <main className='buy-Page'>
        <section className='buyPage'>
            <section className='imgSection'>
                <ProductImages images={filteredProduct.images} />
            </section>
            <section className='detailSection'>
                <div className='productName'>
                    <h2>{filteredProduct.brandName}</h2>
                    <p>{filteredProduct.description}</p>
                    <p className='product-rating'> 4.2 | 5k ratings</p>
                </div>
                <hr />
                <div  className='price-and-size'>
                    <div className='price-div'>
                        <p className='price'>Rs {filteredProduct.offerPrice}</p>
                        <p>MRP <span>Rs{filteredProduct.oldPrice}</span></p>
                        <p className='offer'>{Math.ceil(((filteredProduct.oldPrice - filteredProduct.offerPrice)/filteredProduct.oldPrice) * 100) }%OFF</p>
                    </div>
                    <div className='size-div'>
                        <p>Inclusive of all taxes</p>
                        <h5>Select Size</h5>
                        <div className='size'>
                            {filteredProduct.size.map((siz,index)=>(
                                <p onClick={()=>setSize(siz)} className={`${size === siz ? "active" : "size-not-active"}`} key={index}>{siz}</p>
                            ))}
                        </div>
                        <div className='price-size-buttons'>
                            {isItemInBag ? 
                            <button className='bag-icon' > 
                                <p>Go to Bag</p> 
                                <p><FaShoppingBag /></p>
                            </button>
                            :
                            <button className='bag-icon' onClick={()=>addToBag(filteredProduct.id)}>
                                <p><FaShoppingBag /></p>
                                <p>Add to Bag</p></button>
                            }
                            {
                                isItemInWishList ? 
                                    <button className='heart-icon-active'> <IoHeart style={{color:"red"}}/> Wishlisted</button>
                                :
                                    <button className='heart-icon' onClick={()=>handleAddToWishList(filteredProduct.id)}> <IoHeart /> Wishlist</button>
                            }
                        </div>
                    </div>
                </div>
                <hr />
                <div className='delivery-options'>
                    <div className="title">
                        <h3>DELIVERY OPTIONS</h3>
                        <p><FaTruck size={20}/></p>
                    </div>
                    <div className='pincode-input'>
                        <input type='number' placeholder='Enter Pincode' value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
                        <a type='button' className='check' onClick={()=>handlePinCheck()}>{gotPin ? "change" : "check"}</a>
                    </div>
                    {gotPin ? (
                        <div className='delivery-detail'>
                            <div className='detail'>
                                <p><FaTruckFast /></p>
                                <p>Get it by Tue, Jan 23</p>
                            </div>
                            <div className='detail'>
                                <IoIosPhonePortrait />
                                <p>Pay on delivery available</p>
                            </div>
                            <div className='detail'>
                                <p><GoArrowSwitch /></p>
                                <p>Easy 7 days return & exchange available</p>
                            </div>
                        </div>
                    ):(
                        <div className='delivery-promises'>
                            <p>100% Original Products</p>
                            <p>Pay on delivery might be available</p>
                            <p>Easy 7 days returns and exchanges</p>
                            <p>Try & Buy might be available</p>
                        </div>
                    )}
                </div>
                <hr />
                <ProductDetail 
                product={filteredProduct}
                handleRatingChange={handleRatingChange}
                selectedRating={selectedRating}
                />
            </section>
        </section>
        <section>
            <h3 className='similar-title'>SIMILAR PRODUCT</h3>
            <div className="product-container">
                {
                    category && category.length > 0 &&
                    <ProductCard isProductDetail={true} category={filteredCategory}
                    wishList={wishList}/>
                }
            </div>
        </section>
    </main>
  )
}

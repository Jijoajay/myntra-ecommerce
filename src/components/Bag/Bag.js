import React,{useEffect, useState} from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { BiSolidCoupon } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import "./Bag.css"
export const Bag = ({pinCode, gotPin, product,bagProduct,setBagProduct, wishList}) => {
    const [currentSection, setCurrentSection] = useState(1)
    const [selected, setSelected] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const bagId = bagProduct.map((bag)=>bag.productId)
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
    useEffect(()=>{
        const filteredProducts = product.filter((pro) => bagId.includes(pro.id));
        setFilteredProducts(filteredProducts)
    },[])
  return (
    <main className='bag-main'>
        <header>
            <p className={`${currentSection === 1 ? "underLine ": ""}`}> BAG </p>  
            <p> ------ </p>
            <p className={`${currentSection === 2 ? "underLine ": ""}`}> ADDRESS </p>
            <p> ------ </p>
            <p className={`${currentSection === 3 ? "underLine ": ""}`}> PAYMENT </p>
        </header>
        <section className='payment-section'>
            <div className='item-place'>
                <div className='login-item'>
                    {gotPin ? (
                        <>
                            <p>Deliver to: {pinCode}</p>
                            <button>Change Address</button>
                        </>
                    ):(
                        <>
                        <h4>check delivery time & services</h4>
                        <button>ENTER PINCODE</button>
                        </>
                    )}
                </div>
                <div className='offer-zone'>
                    <div className='offer'>
                        <p><BiSolidOffer /></p>
                        <p>Available Offers</p>
                    </div>
                    <div className='offer-list'>
                        <ul>
                            <li>10% instant discount on icici credit cards </li>
                        </ul>
                    </div>
                </div>
                <div className='checkout-items'>
                    <div>
                        <input type="checkbox"
                        onChange={()=>handleCheckAll()}/>
                        <p>{selected.length}/{bag.length}</p>
                        <h4>Items Selected</h4>
                    </div>
                    <div>
                        <p>Remove</p>
                        <p>|</p>
                        <p>Move to wishlist</p>
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
                                        <p><RxCross1 /></p>
                                    </div>
                                </div>
                            </div>
                            </>
                        ))
                    }
                <div className='login-item'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Login to see the items from you existing bag and wishlist</p>
                    </div>
                    <div>
                        LOGIN NOW
                    </div>
                </div>
            </div>
            <div className='order-place'>
                    <div className='coupons'>
                        <h3>COUPONS</h3>
                        <div className='coupon'>
                            <div>
                                <BiSolidCoupon />
                                <p>Apply coupons</p>
                            </div>
                            <button>Apply</button>
                        </div>
                        <div>
                            <p>login to get upto ₹400 OFF on your first order</p>
                        </div>
                    </div>
                    <hr />
                    <div className='coupons'>
                        <h3>GIFTING & PERSONALISATION</h3>
                        <div className='gift'>
                            <div>
                                <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.png" alt="ribbon" />
                            </div>
                            <div>
                                <h4>Buyed for your loved one</h4>
                                <p>Gift wrap and personalised message on card,<br/>Only for ₹25</p>
                                <a>ADD GIFT WRAP</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='coupons'>
                        <h3>PRICE DETAILS(no ITEM)</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Total MRP</td>
                                    <td></td>
                                    <td>₹800</td>
                                </tr>
                                <tr>
                                    <td>Discount on MRP <span>Know More</span></td>
                                    <td></td>
                                    <td>-400</td>
                                </tr>
                                <tr>
                                    <td>Coupon discount  </td>
                                    <td></td>
                                    <td>apply coupon</td>
                                </tr>
                                <tr>
                                    <td>Platform fee <span>Know More</span></td>
                                    <td></td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>shipping fee <span>Know More</span></td>
                                    <td></td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td><hr className='hori'/></td>
                                    <td><hr /></td>
                                    <td><hr className='hori'/></td>
                                </tr>
                                <tr>
                                    <tr className='total'>Total Amount</tr>
                                    <td></td>
                                    <td className='total'>400</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='placeOrder'>PlaceOrder</button>
                    </div>
            </div>
        </section>
    </main>
  )
}

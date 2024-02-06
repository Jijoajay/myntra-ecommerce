import React,{useContext, useEffect, useState} from 'react'
import { BiSolidCoupon } from "react-icons/bi";
import "./Bag.css"
import { DataContext } from '../../context/DataContext';
import { ItemPlace } from './ItemPlace';
import AddressShower from './AddressShower';
import { Payment } from './Payment';

export const Bag = () => {
    const { product,bagProduct, isAuthenticate,} = useContext(DataContext)
    const [currentSection, setCurrentSection] = useState(1)
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterSelectedProduct, setFilterSelectedProduct] = useState([])
    const bagId = bagProduct.map((bag)=>bag.productId)
    const [selected, setSelected] = useState([])

    useEffect(()=>{
        const filteredProducts = product.filter((pro) => bagId.includes(pro.id));
        setFilteredProducts(filteredProducts)
    },[product,bagProduct])

    useEffect(()=>{
        const filterSelectedProduct = product.filter((pro)=>selected.includes(pro.id))
        setFilterSelectedProduct(filterSelectedProduct)
    },[selected])

    let totalPrice = 0;
    let totalMrp = 0;
    let discountedPrice = 0;
    filterSelectedProduct.forEach((item) => {
        totalPrice += item.offerPrice;
        totalMrp += item.oldPrice;
        discountedPrice += (item.oldPrice - item.offerPrice)
    });
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
            {currentSection === 1 ?
                <ItemPlace 
                filteredProducts={filteredProducts}
                bagId={bagId}
                selected={selected}
                setSelected={setSelected}
                />
                : currentSection === 2 ?
                <AddressShower />
                : currentSection === 3 ?
                <Payment />
                : null
            }
            {currentSection === 1 ?
            <>
            
                <div className='order-place'>
                        <div className='coupons'>
                            <h3>COUPONS</h3>
                            <div className='coupon'>
                                <div>
                                    <BiSolidCoupon />
                                    <p>Apply coupons</p>
                                </div>
                                <button>APPLY</button>
                            </div>
                            {!isAuthenticate &&
                            <div>
                                <p>login to get upto ₹400 OFF on your first order</p>
                            </div>
                            }
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
                                    <p>ADD GIFT WRAP</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='coupons'>
                            <h3>PRICE DETAILS ({selected.length === 0 ? "0 items" : ` ${selected.length} items`})</h3>
                            <table className='table-mrp'>
                                <tbody>
                                    {selected.length === 0 ? 
                                    <>
                                        <tr>
                                            <td>Total MRP</td>
                                            <td></td>
                                            <td>₹0</td>
                                        </tr>
                                    </>
                                    :
                                    <>
                                        <tr>
                                            <td>Total MRP</td>
                                            <td></td>
                                            <td>₹{totalMrp}</td>
                                        </tr>
                                        <tr>
                                            <td>Discount on MRP <span>Know More</span></td>
                                            <td></td>
                                            <td className='green'>-₹{discountedPrice}</td>
                                        </tr>
                                        <tr>
                                            <td>Coupon discount  </td>
                                            <td></td>
                                            <td className='red'>apply coupon</td>
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
                                    </>
                                    }
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                <tr>
                                    <tr className='total'>Total Amount</tr>
                                    {selected.length === 0 ? 
                                    <td className='total-number'>₹0</td>
                                    :
                                    <td className='total-number'>₹{totalPrice}</td>
                                    }
                                </tr>
                                </tbody>
                            </table>
                            <button className='placeOrder' onClick={()=>setCurrentSection(2)}>PLACE ORDER</button>
                        </div>
                </div>
            </>
            : currentSection === 2 
            ?
            <div className='order-place'>
                <h4>Delivery Estimates</h4>
                <div className='coupons'>
                    <h3>PRICE DETAILS ({selected.length === 0 ? "0 items" : ` ${selected.length} items`})</h3>
                    <table className='table-mrp'>
                        <tbody>
                            {selected.length === 0 ? 
                            <>
                                <tr>
                                    <td>Total MRP</td>
                                    <td></td>
                                    <td>₹0</td>
                                </tr>
                            </>
                            :
                            <>
                                <tr>
                                    <td>Total MRP</td>
                                    <td></td>
                                    <td>₹{totalMrp}</td>
                                </tr>
                                <tr>
                                    <td>Discount on MRP <span>Know More</span></td>
                                    <td></td>
                                    <td className='green'>-₹{discountedPrice}</td>
                                </tr>
                                <tr>
                                    <td>Coupon discount  </td>
                                    <td></td>
                                    <td className='red'>apply coupon</td>
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
                            </>
                            }
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr>
                            <tr className='total'>Total Amount</tr>
                            {selected.length === 0 ? 
                            <td className='total-number'>₹0</td>
                            :
                            <td className='total-number'>₹{totalPrice}</td>
                            }
                        </tr>
                        </tbody>
                    </table>
                    <button className='placeOrder' onClick={()=>setCurrentSection(3)}>CONTINUE</button>
                </div>
            </div>
            : currentSection === 3
            ?
                <>
                    <div className='coupons'>
                    <h3>PRICE DETAILS ({selected.length === 0 ? "0 items" : ` ${selected.length} items`})</h3>
                    <table className='table-mrp'>
                        <tbody>
                            {selected.length === 0 ? 
                            <>
                                <tr>
                                    <td>Total MRP</td>
                                    <td></td>
                                    <td>₹0</td>
                                </tr>
                            </>
                            :
                            <>
                                <tr>
                                    <td>Total MRP</td>
                                    <td></td>
                                    <td>₹{totalMrp}</td>
                                </tr>
                                <tr>
                                    <td>Discount on MRP <span>Know More</span></td>
                                    <td></td>
                                    <td className='green'>-₹{discountedPrice}</td>
                                </tr>
                                <tr>
                                    <td>Coupon discount  </td>
                                    <td></td>
                                    <td className='red'>apply coupon</td>
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
                            </>
                            }
                        </tbody>
                        </table>
                        <table>
                            <tbody>
                            <tr>
                                <tr className='total'>Total Amount</tr>
                                {selected.length === 0 ? 
                                <td className='total-number'>₹0</td>
                                :
                                <td className='total-number'>₹{totalPrice}</td>
                                }
                            </tr>
                            </tbody>
                        </table>
                </div>
                </>
            :null
            }
        </section>
    </main>
  )
}

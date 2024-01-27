import './App.css';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './components/navbar/Navbar';
import {Home} from "./components/home/Home"
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { BuyPage } from './components/BuyPage/BuyPage';
import { Bag } from './components/Bag/Bag';
import { useEffect, useState } from 'react';
import fetch from './api/fetch';
import { Login } from './components/Login/Login';
import { Wishlists } from './components/Wislist/Wishlists';
import { Order } from './components/Order/Order';
function App() {
  const [carousel, setCarousel] = useState([])
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [bagProduct, setBagProduct] = useState([])
  const [pinCode, setPinCode] = useState(null)
  const [gotPin, setGotPin] = useState(null)
  const [wishList, setWishList] = useState([])
  useEffect(()=>{
    const fetchCarouselData = async()=>{
      try {
        const response = await fetch.get('/carousel')
        setCarousel(response.data)
      } catch (error) {
        console.log("error",error)
      }
    }
    fetchCarouselData();

    const fetchCategoryData = async()=>{
      try {
        const response = await fetch.get('/category')
        setCategory(response.data)
      } catch (error) {
        console.log("error",error)
      }
    }
    fetchCategoryData();

    const fetchProductData = async()=>{
      try {
        const response = await fetch.get('/products')
        setProduct(response.data)
      } catch (error) {
        console.log("error",error)
      }
    }
    fetchProductData();

    const fetchBagData = async()=>{
      try {
        const response = await fetch.get('/bag')
        setBagProduct(response.data)
      } catch (error) {
        console.log("error",error)
      }
    }
    fetchBagData();

    
  },[])
  const handleAddToWishList = async(product_id)=>{
    try {
      const wishListId = wishList.length ? wishList.length + 1 : 1
      const newItem = {
        id:wishListId,
        productId:product_id
      }
      const reponse = await fetch.post('/wishlist',newItem)
      setWishList([...wishList, newItem])
    } catch (error) {
      console.error(error.message)
    }
  }
  const handleRemoveFromWishList = async(product_id)=>{
    try {
      console.log(product_id)
      const response = await fetch.delete(`/wishlist/${product_id}`)
      console.log(response.data)
      setWishList(wishList.filter((list)=>list.productId !== product_id))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    const fetchWishListData = async() =>{
      try {
        const response = await fetch.get('/wishlist')
        setWishList(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchWishListData();
  },[])

  
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home carousel={carousel} category={category}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:categoryName'element={<ProductDetail 
        product={product} 
        category={category}
        wishList={wishList}
        handleAddToWishList={handleAddToWishList} 
        />}/>
        <Route path='/buyProduct/:id'element={<BuyPage 
        gotPin={gotPin}
        pinCode={pinCode}
        product={product} 
        category={category}
        wishList={wishList}
        setGotPin={setGotPin}
        bagProduct={bagProduct} 
        setPinCode={setPinCode}
        setBagProduct={setBagProduct}
        handleAddToWishList={handleAddToWishList} 
        />}/>
        <Route path='/checkout'element={<Bag 
        pinCode={pinCode}
        setPinCode={setPinCode}
        gotPin={gotPin}
        setGotPin={setGotPin}
        product={product}
        bagProduct={bagProduct} 
        setBagProduct={setBagProduct} 
        />}/>
        <Route path='/wishlist' element={<Wishlists 
        product={product}
        wishList={wishList}
        handleAddToWishList={handleAddToWishList}
        handleRemoveFromWishList={handleRemoveFromWishList}
        />}/>
        <Route path="/profile"
        element={<Order />}
        />
      </Routes>
    </div>
  );
}

export default App;

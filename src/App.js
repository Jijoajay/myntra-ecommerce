import './App.css';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './components/navbar/Navbar';
import {Home} from "./components/home/Home"
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { BuyPage } from './components/BuyPage/BuyPage';
import { Bag } from './components/Bag/Bag';
import { useEffect, useState } from 'react';
import fetch from './api/fetch';
function App() {
  const [carousel, setCarousel] = useState([])
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [bagProduct, setBagProduct] = useState([])
  const [pinCode, setPinCode] = useState(null)
  const [gotPin, setGotPin] = useState(null)

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
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home carousel={carousel} category={category}/>} />
        <Route path='/product/:categoryName'element={<ProductDetail category={category} product={product} />}/>
        <Route path='/buyProduct/:id'element={<BuyPage 
        category={category}
        product={product} 
        bagProduct={bagProduct} 
        setBagProduct={setBagProduct}
        pinCode={pinCode}
        setPinCode={setPinCode}
        gotPin={gotPin}
        setGotPin={setGotPin}
        />}/>
        <Route path='/checkout'element={<Bag 
        pinCode={pinCode}
        setPinCode={setPinCode}
        gotPin={gotPin}
        setGotPin={setGotPin}
        product={product}
        bagProduct={bagProduct} 
        />}/>
      </Routes>
    </div>
  );
}

export default App;

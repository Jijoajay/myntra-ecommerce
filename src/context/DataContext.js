import { createContext, useEffect, useState } from "react";
import fetch from "../api/fetch";

export const DataContext = createContext({});

export const DataProvider = ({children})=>{
    const [carousel, setCarousel] = useState([])
    const [search, setSearch] = useState("")
    const [carouselBase, setCarouselBase] = useState([])
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    const [phNo, setPhNo] = useState(null)
    const [bagProduct, setBagProduct] = useState([])
    const [pinCode, setPinCode] = useState(null)
    const [gotPin, setGotPin] = useState(null)
    const [isAuthenticate, setIsAuthenticate] = useState(false)
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
            console.log("getting catgory data")
            setCategory(response.data)
        } catch (error) {
            console.log("error at category",error.message)
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
        const fetchCarousel = async()=>{
            const response = await fetch.get('/carouselBase')
            setCarouselBase(response.data)
        }
        fetchCarousel();
    },[])

    const handleAddToWishList = async(product_id)=>{
        try {
        const wishListId = wishList.length ? wishList.length + 1 : 1
        const newItem = {
            id:wishListId,
            productId:product_id
        }
        await fetch.post('/wishlist',newItem)
        setWishList([...wishList, newItem])
        } catch (error) {
        console.error(error.message)
        }
    }
    const handleRemoveFromWishList = async(product_id)=>{
        try {
        await fetch.delete(`/wishlist/${product_id}`)
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
    },[setIsAuthenticate])
    
    useEffect(()=>{
        const authenticateUser = ()=>{
        const phoneNumber = localStorage.getItem("phoneNumber")
        if(phoneNumber){
            setIsAuthenticate(true)
        }else{
            setIsAuthenticate(false)
        }
        }
        authenticateUser();
    },[])

    const handleLogout = ()=>{
        setIsAuthenticate(false)
        localStorage.removeItem('phoneNumber')
  }
  return(
    <DataContext.Provider
    value={{
        wishList,isAuthenticate,handleAddToWishList,handleRemoveFromWishList,handleLogout,
        phNo,search,product,setSearch, carousel, setCarousel,setPhNo,setProduct, category, carouselBase,
        setIsAuthenticate, gotPin, pinCode,setGotPin,bagProduct, setBagProduct, setPinCode
    }}
    >
        {children}
    </DataContext.Provider>
  )
}
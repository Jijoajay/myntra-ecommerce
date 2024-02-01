import './App.css';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './components/navbar/Navbar';
import {Home} from "./components/home/Home"
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { BuyPage } from './components/BuyPage/BuyPage';
import { Bag } from './components/Bag/Bag';
import { Login } from './components/Login/Login';
import { Wishlists } from './components/Wislist/Wishlists';
import { Order } from './components/Order/Order';
import { Men } from './components/MenuItem/Men';
import { DataProvider } from './context/DataContext';
function App() {
  
  
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men'element={<Men />}/>
          <Route path='/women'element={<Men women={true}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:categoryName' element={<ProductDetail />}/>
          <Route path='/buyProduct/:id'element={<BuyPage />}/>
          <Route path='/checkout'element={<Bag />}/>
          <Route path='/wishlist' element={<Wishlists />}/>
          <Route path='/my/profile' element={<Order comp={"profile"}/>} />
          <Route path="/my/dashboard" element={<Order comp={"overview"}/>} />
          <Route path='/my/order-return' element={<Order comp={"order-return"}/>} />
          <Route path='/my/coupons' element={<Order comp={"coupons"}/>} />
          <Route path='/my/address' element={<Order comp={"address"}/>} />
          <Route path='/my/editprofile' element={<Order comp={"editprofile"}/>} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;

import Header from './User/Component/Header/Header';
import Home from './User/Container/Home/Home';
import Footer from './User/Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import Shop from './User/Container/Shop/Shop';
import Shop_Details from './User/Container/Shop_Details/Shop_Details';
import Testimonial from './User/Container/Testimonial/Testimonial';
import Cart from './User/Container/Cart/Cart';
import Checkout from './User/Container/Checkout/Checkout';
import Pages404 from './User/Container/404Pages/Pages404';
import Contact from './User/Container/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/shop_details' element={<Shop_Details />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/testimonial' element={<Testimonial />} />
        <Route exact path='/pages404' element={<Pages404 />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

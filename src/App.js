
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Category from './components/Category';
import Pallazo from './components/Pallazo';
import Anarkali from './components/Anarkali';
import Lehenga from './components/Lehenga';
import Suits from './components/Suits';
import Kurti from './components/Kurti';
import Saree from './components/Saree';
import AnarkaliDetail from './components/AnarkaliDetail';
import CartProduct from './components/CartProduct';
import PallazoDetail from './components/PallazoDetail';
import LehengaDetail from './components/LehengaDetail';
import SareeDetail from './components/SareeDetail';
import KurtiDetail from './components/KurtiDetail';
import SuitsDetail from './components/SuitsDetail';
import DandiyaProduct from './components/DandiyaProduct';
import DandiyaDetail from './components/DandiyaDetail';
import Dandiya from './components/Dandiya';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Dandiya />} />
          <Route path='/product' element={<Category />} />
          <Route path='/pallazo' element={<Pallazo />} />
          <Route path='/pallazo/:id' element={<PallazoDetail />} />
          <Route path='/anarkali' element={<Anarkali />} />
          <Route path='/anarkali/:id' element={<AnarkaliDetail />} />
          <Route path='/lehenga' element={<Lehenga />} />
          <Route path='/lehenga/:id' element={<LehengaDetail />} />
          <Route path='/suit' element={<Suits />} />
          <Route path='/suit/:id' element={<SuitsDetail />} />
          <Route path='/kurti' element={<Kurti />} />
          <Route path='/kurti/:id' element={<KurtiDetail />} />
          <Route path='/saree' element={<Saree />} />
          <Route path='/saree/:id' element={<SareeDetail />} />
          <Route path='/cart' element={<CartProduct />} />
          <Route path='/dandiya' element={<DandiyaProduct/>} />
          <Route path='/dandiya/:id' element={<DandiyaDetail/>} />
          <Route path='/check' element={<Checkout/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

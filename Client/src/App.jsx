import { Route, Routes } from 'react-router';
import './App.css';
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from './pages/ProductDetailsPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BodyPage from './BodyPage';

function App() {

  return (
    <> 
    <Header/>
    <BodyPage/>
  <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/NotFoundPage' element={<NotFoundPage/>} />
<Route path='/products/:id'  element={<ProductDetailsPage/>}/>
<Route path='/LoginPage' element={<LoginPage/>}/>
  </Routes>
  <Footer/>
    
    </>
  )
}

export default App

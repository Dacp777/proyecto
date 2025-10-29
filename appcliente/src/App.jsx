import React from 'react';
import MenuBar from './componentes/MenuBar/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/Home/Home';
import Contactenos from './paginas/Contactenos/Contactenos';
import ExplorarComida from './paginas/ExplorarComida/ExplorarComida';
import FoodDetails from './paginas/FoodDetails/FoodDetails';
import Cart from './paginas/Cart/Cart';
import PlaceOrder from './paginas/PlaceOrder/PlaceOrder';
import Login from './componentes/Login/Login';
import Register from './componentes/Register/Register';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <MenuBar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactenos' element={<Contactenos />} />
        <Route path='/explorar' element={<ExplorarComida />} />
        <Route path='/food/:id' element={<FoodDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
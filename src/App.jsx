import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './views/Home'
import Products from './views/Products'
import Product from './views/Product'
import Register from './views/Register'
import Login from './views/Login'
import Footer from './views/Footer'
import Cart from './views/Cart'
import { DataContext } from './context/DataProvider'


function App() {
  const [count, setCount] = useState(0)

  const {cart, setCart} = useContext(DataContext);

  // pass function down as props
  const addItem = (item) => {
    let cartCopy = {...cart};

    cartCopy.size++;
    cartCopy.total = (parseFloat(cartCopy.total)+(Math.round(item.price*100)/100)).toFixed(2); 
    cartCopy.items[item.tail_id] ?
    cartCopy.items[item.tail_id].quantity++ 
    :
    cartCopy.items[item.tail_id] = {
        "data": item,
        "quantity": 1
    };
    console.log(cartCopy)
    setCart(cartCopy);
  }

  const decreaseItem = (item) => {
    let cartCopy = {...cart};

    cartCopy.size--;
    cartCopy.total = (parseFloat(cartCopy.total)-(Math.round(item.price*100)/100)).toFixed(2);
    cartCopy.items[item.tail_id].quantity--;

    setCart(cartCopy);
  }

  const deleteItem = (item) => {
    let cartCopy = {...cart};
    let q = cartCopy.items[item.tail_id].quantity;
    let p = (Math.round(item.price*100)/100)
    cartCopy.size -= cartCopy.items[item.tail_id].quantity;
    cartCopy.total = (parseFloat(cartCopy.total)-p*q).toFixed(2);
    delete cartCopy.items[item.tail_id];
    setCart(cartCopy);
  }

  const clearItems = () => {
    setCart({"size": 0, "total": 0, "items": {}})
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/products' element={<Products addItem={addItem} />} />
        <Route children path='/product' element={<Product addItem={addItem} />} />
        <Route children path='/register' element={<Register />} />
        <Route children path='/login' element={<Login />} />
        <Route children path='/cart' element={<Cart addItem={addItem} decreaseItem={decreaseItem} deleteItem={deleteItem} clearItems={clearItems} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App 

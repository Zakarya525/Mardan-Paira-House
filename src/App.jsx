import {Routes, Route} from 'react-router-dom';
import {Suspense, useEffect} from 'react';
import './App.css';
import Error from './components/Error';
import Login from './components/Forms/Login';
import SignUp from './components/Forms/SignUp';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import AddStore from './components/Forms/AddStore';
import AddProduct from './components/Forms/AddProduct';
import Loading from './components/Loading';
import UserProfile from './components/UserProfile/UserProfile';
import Products from './components/Dashboard/Products/products';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/AddStore" element={<AddStore />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </div>
  );
}

export default App;

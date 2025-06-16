// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Header/Homeslider';
import Productlisting from './Components/Header/Productlisting';
import Productdetail from './Components/Header/Productdetail';
import Sidebar2 from './Components/Header/Sidebar2';
import ProductPage from './Components/Header/Productpage';
import Analytics from './Components/Header/Analytics1';
import Customer from './Components/Header/Customer';
import Addproduct from './Components/Header/Addproduct';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<Productlisting />} />
        <Route path="/productdetail/:id" element={<Productdetail />} />

     <Route path="/selleradmin" element={<Sidebar2 />}>
  <Route index element={<Analytics />} />  
  <Route path="products" element={<ProductPage />} />
  <Route path="analytics" element={<Analytics />} />
  <Route path="customers" element={<Customer />} />
  <Route path="addproduct" element={<Addproduct />} />
</Route>

      </Routes>
    </Router>
  );
}

export default App;



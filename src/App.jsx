import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Header/Homeslider';
// import Login from './Components/Header/Login';
import Productlisting from './Components/Header/Productlisting';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlisting" element={<Productlisting />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
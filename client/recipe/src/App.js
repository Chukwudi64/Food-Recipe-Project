import './App.css';
import Home from './Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaystackIntegation from './Paystack';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path='/'  element={<Home/> }/>
     
      <Route path="/payment" element={<PaystackIntegation/>}/>
      </Routes>
    </Router>
      
  
  );
}

export default App;
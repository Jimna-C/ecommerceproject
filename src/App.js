import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Home, Login, Register, Reset,Cart,Summary,Orderconfirmed} from "./pages";
import {Header, Footer,ProductListing,ProductDetail} from "./components";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
     <Router>
      <ToastContainer/>
     <Header/>
     <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/reset" element={ <Reset/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      <Route path="/summary" element={ <Summary/> }/>
      <Route path="/orderconfirmation" element={ <Orderconfirmed/> }/>
      {/* <Route path="/products" element={ <ProductListing/> }/> */}
      <Route path="/products/:categoryId" element={<ProductListing />}/>
      <Route path="/productdetail/:productId" element={<ProductDetail />}/>
     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;

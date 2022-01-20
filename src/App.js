import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import SignupPage from './Components/SignupPage';
import ProtectedRoute from './Components/ProtectedRoute';
import About from './Components/About'
import Company from './Components/Company';
import Contact from './Components/Contact';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
     <Routes>
     <Route path="/" element={<Login/>}></Route>
     <Route path="/signup" element={<SignupPage/>}></Route>
     <Route path="/forgotpassword" element={<ForgotPassword/>}></Route> 
    
     <Route element={<ProtectedRoute/>}>

     <Route path="/home" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/company" element={<Company/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>

      </Route>

     </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;

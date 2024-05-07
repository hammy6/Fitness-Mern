import './App.css';
import LoginPage from './Pages/LoginPage';
import {Routes, Route } from "react-router-dom";
import RegisterPage from './Pages/RegisterPage';
import ForgotPage from './Pages/ForgotPage';
import ResetPasswordPage from './Pages/RestPass/ResetPasswordPage';


function App() {
  return (
 
      <Routes>
      <Route path={'/login/page'} element={<LoginPage/>}/>
      <Route path={'/register/page'} element={<RegisterPage/>}/>
      <Route path={'/forgot/page'} element={<ForgotPage/>}/>
      <Route path={'/reset/page'} element={<ResetPasswordPage/>}/>
      </Routes>
  
  );
}

export default App;

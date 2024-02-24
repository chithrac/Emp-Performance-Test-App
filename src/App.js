import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

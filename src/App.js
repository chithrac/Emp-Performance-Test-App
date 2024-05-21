import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import SignUp from './components/LoginPage/SignUp';
import Welcome from './components/WelcomePage/Welcome';
import SearchEmployee from './components/RateEmployee/SearchEmployee';
import RateEmployee from './components/RateEmployee/RateEmployee';
import Feedback from './components/FeedbackPage/Feedback';
import SeeRating from './components/RateEmployee/YourRating';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Search' element={<SearchEmployee />} />
        <Route path='/Rate' element={<RateEmployee />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/YourRating' element={<SeeRating />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

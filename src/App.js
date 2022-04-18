import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout/:id' element={<Checkout />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

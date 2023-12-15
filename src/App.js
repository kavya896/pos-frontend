import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginPage from './components/loginpage/loginPage';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import UnitPage from './components/IngredientPage/IngredientUnit';

function App() {

  // const user = useSel

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  console.log("from app.js page",userInfo)

  return (
    <Router>
     {userInfo && <HomePage/>}
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} ></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path='/unit' element={<UnitPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

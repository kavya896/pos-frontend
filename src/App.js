import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginPage from './components/loginpage/loginPage';
import HomePage from './components/HomePage/HomePage';
import IngredientCategory from './components/IngreCategory/IngreCategory';
import UnitPage from './components/IngredientPage/IngredientUnit';
import ListUnit from './components/ListIngredient/ListIngredient';
import PinPage from './components/loginpage/pin';

function App() {

  // const user = useSel

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  console.log("from app.js page",userInfo)

  return (
    <Router>
       {userInfo && <HomePage/>}
      <Routes>
     
        <Route path="/" element={userInfo?"":<LoginPage/>} />
        <Route path='/pin' element={userInfo?"":<PinPage/>} ></Route>
        <Route path="/home" element={<HomePage/>} ></Route>
        <Route path="/category" element={<IngredientCategory/>}></Route>
        <Route path='/unit' element={<UnitPage/>}></Route>
        <Route path='/listunit' element={<ListUnit/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;

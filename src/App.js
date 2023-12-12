import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginPage from './components/loginpage/loginPage';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;

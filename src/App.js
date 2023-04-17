import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/Home/HomePage';


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  </Router>
  );
}

export default App;

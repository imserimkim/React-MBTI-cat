import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Results'; 

function App() {
  return (
    <Home />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/question" element={<Question />} />
    //   <Route path='/result' element={<Result />} />
    // </Routes>
  );
}

export default App;

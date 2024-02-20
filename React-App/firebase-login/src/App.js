import Login from './Components/Login';
import Mypage from './Components/Mypage';
import Community from './Components/Community';
import Information from './Components/Information';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
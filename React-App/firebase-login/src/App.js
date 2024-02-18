// import logo from './logo.svg';
// import './App.css';
// import react from 'react';
// import { Router, Route } from 'react-router-dom';
// import Login from './Components/Login';
// import mypage from './Components/mypage';

// function App() {
//   return (
//     <>
//     <Router>
//      <Route exact path="/" component={Login}/>
//      <Route path="/mypage" component={mypage}/>
//     </Router>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import mypage from "./Components/mypage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/Login"} element={<Login />}></Route>
          <Route path={"/user/mypage"} element={<mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
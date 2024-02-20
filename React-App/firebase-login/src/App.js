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

import Imformation from './Components/Imformation';
import {dummy} from './imformationDummy';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  
  return (
    
    <div className="app-container">
      {
        dummy.results.map((item) => {
          return(
            <BrowserRouter>
              <Imformation
                title={item.title}
                imformation_path={item.imformation_path}
                content={item.content}
                link_url={item.link_url}
              />
            </BrowserRouter>
          )
        })
      }
      
    </div>
  );
}

export default App;
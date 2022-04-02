import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginPage } from './page';
import { ForgotPassword, Login, ResetPassword } from './components';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage/>} />
            </Routes>
          </BrowserRouter>
   
    </div>
  );
}

export default App;

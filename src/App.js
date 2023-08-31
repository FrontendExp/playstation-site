import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Mainhero from './Hero-main/Mainhero';
import Registration from './Validation/Registration';
import Login from './Validation/Login';


import './App.css';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Registration />} />
          <Route path='/Login' element={<Login />} />

          <Route path='/Homepage' element={<Mainhero />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

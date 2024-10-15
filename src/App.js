import './App.css';
import Custom from './custom/custom';
import Login from './layout/login';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>     
          <Route path="/login" element={<Login />} />
          <Route path="/custom" element={<PrivateRoute Component={Custom} />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;

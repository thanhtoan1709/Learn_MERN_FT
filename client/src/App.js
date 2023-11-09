import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Read from './components/Read'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/read/:id' element={<Read/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

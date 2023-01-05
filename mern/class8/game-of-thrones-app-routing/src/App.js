import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import TableList from './Components/TableList';
import Home from './Views/Home';
import CharacterDetail from './Components/CharacterDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/lista-completa' element={<TableList/>} />
        <Route path='/personaje/:id' element={<CharacterDetail/>} />
      </Routes>
    </div>
  );
}

export default App;

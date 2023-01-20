import { Routes, Route } from "react-router-dom";

import './App.css';
import FormMenu from './Views/FormMenu/FormMenu';
import ListMenu from "./Views/ListMenu/ListMenu";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<ListMenu/>} />
          <Route path="/nuevo-menu" element={<FormMenu/>} />
          <Route path="/editar-menu/:id" element={<FormMenu/>} />
      </Routes>
    </div>
  );
}

export default App;

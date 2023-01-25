import './App.css';
import { Routes, Route } from "react-router-dom";
import StudentsTable from './Views/StudentsTable/StudentsTable';
import StudentForm from './Views/StudentForm/StudentForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/estudiantes' element={<StudentsTable/>} />
        <Route path='/crear-estudiante' element={<StudentForm/>} />
        <Route path='/editar-estudiante/:id' element={<StudentForm/>} />
      </Routes>
    </div>
  );
}

export default App;

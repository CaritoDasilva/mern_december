import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Layout from './Components/Layout';

function App() {
  const students = ['Pilar', 'Sandra', 'Luis', 'Angelo'];
  return (
    <div className="App">
      <h1>Hola</h1>
      <Layout>
        <Home students={students}/>
      </Layout>
    </div>
  );
}

export default App;

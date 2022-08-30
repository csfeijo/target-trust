import './assets/main.scss';
import Menu from './components/Menu';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';
import DepartamentosDetalhes from './pages/DepartamentosDetalhes';
import { 
  BrowserRouter,
  Routes, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/departamentos' element={<Departamentos/>}/>
          <Route path='/departamentos/:idDepartamento' element={<DepartamentosDetalhes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

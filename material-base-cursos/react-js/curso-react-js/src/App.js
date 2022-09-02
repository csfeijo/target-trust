import './assets/main.scss';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
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
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path='/departamentos'>
              <Route index element={<Departamentos/>}/>
              <Route path=':idDepartamento' element={<DepartamentosDetalhes/>}/>
            </Route>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

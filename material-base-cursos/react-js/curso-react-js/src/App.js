import './assets/main.scss';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './Theme';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';
import DepartamentosDetalhes from './pages/DepartamentosDetalhes';
import FormDepartamento from './pages/FormDepartamento';
import { 
  BrowserRouter,
  Routes, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              <Route path='/departamentos'>
                <Route index element={<Departamentos/>}/>
                <Route path=':idDepartamento' element={<DepartamentosDetalhes/>}/>
              </Route>
              <Route path='/form-departamento' element={<FormDepartamento/>}/>
            </Route>
            {/* Fica fora do / */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

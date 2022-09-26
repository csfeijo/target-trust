import './assets/main.scss';
import { useSelector } from 'react-redux';
import { selectSetup } from './store/setup/setupSlice';
import { ThemeProvider } from 'styled-components';
import * as Themes from './Theme';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';
import DepartamentosDetalhes from './pages/DepartamentosDetalhes';
import FormDepartamento from './pages/FormDepartamento';
import Setup from './pages/Setup';
import { 
  BrowserRouter,
  Routes, 
  Route 
} from 'react-router-dom';

function App() {

  //const { theme } = useSelector(state => state.setup);
  const { theme } = useSelector(selectSetup);
  const activeTheme = Themes[theme];

  return (
      <ThemeProvider theme={activeTheme}>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              <Route path='/departamentos'>
                <Route index element={<Departamentos/>}/>
                <Route path=':idDepartamento' element={<DepartamentosDetalhes/>}/>
                <Route path='new' element={<FormDepartamento/>}/>    
                <Route path='edit/:idDepartamento' element={<FormDepartamento/>}/>    
              </Route>
            </Route>
            <Route path='/setup' element={<Setup/>} />
            {/* Fica fora do / */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;

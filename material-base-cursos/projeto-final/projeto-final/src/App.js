import Menu from './components/Menu'
import Departamentos from './components/Departamentos'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Departamentos />
      </div>
    </>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from './components/Menu'
import Departamentos from './components/ListaDepartamentos'
import FormDepartamentos from './components/FormDepartamentos'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<Departamentos />} />
            <Route path="/departamentos" element={<Departamentos />}/>
            <Route path="/departamentos/new" element={<FormDepartamentos />} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

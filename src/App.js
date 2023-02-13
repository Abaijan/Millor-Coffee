import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './scss/style.scss'
import Layout from './Layout/Layout';
import Catalog from './pages/Catalog/Items/Catalog';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/сatalog' element={<Catalog/>}/>
      </Route>
    </Routes>
  </>
  );
}

export default App;

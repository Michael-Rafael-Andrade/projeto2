import './App.css';
import Header from './components/Header';
import PhotoContextProvider from './context/PhotoContext.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Item from './components/Item.js';

function App() {
  return (

      <PhotoContextProvider>
        <BrowserRouter>
          <div>
            <Header />

            <Routes>
              {/* Rota inicial */ }
              <Route path='/' element={<Navigate to='islands' replace/>} />
              

              {/* Rotas para as categorias fixas */}
              <Route path='/islands' element={<Item searchTerm='islands'/>}/>
              <Route path='/Archtecutre' element={<Item searchTerm="Archtecture'/>"}


            </Routes>

          </div>
        </BrowserRouter>
      </PhotoContextProvider>
      
  );
}

export default App;

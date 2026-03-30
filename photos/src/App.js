import './App.css';
import Header from './components/Header';
import PhotoContextProvider from './context/PhotoContext.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Item from './components/Item.js';
import NotFound from './components/NotFound.js';

function App() {
  return (

      <PhotoContextProvider>
        <BrowserRouter>
          <div>
            <Header />

            <Routes>
              {/* Rota inicial */ }
              <Route path='/' element={<Navigate to='Islands' replace/>} />
              

              {/* Rotas para as categorias fixas */}
              <Route path='/Islands' element={<Item searchTerm='Islands'/>}/>
              <Route path='/Archtecture' element={<Item searchTerm="Archtecture"/>}/>
              <Route path='/Coding' element={<Item searchTerm='Codign'/>}/>
              <Route path='/Coffe' element={<Item searchTerm='Coffe'/>}/>

              {/* Rota dinâmica = vai para onde digitar e mandar buscar no search*/}
              <Route path='/' />

              {/* Rota Not Found */}
              <Route path='*' element={<NotFound />}/>

            </Routes>

          </div>
        </BrowserRouter>
      </PhotoContextProvider>
      
  );
}

export default App;

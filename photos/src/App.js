import './App.css';
import Header from './components/Header';
import PhotoContextProvider from './context/PhotoContext.js';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import Item from './components/Item.js';
import NotFound from './components/NotFound.js';
import Search from './components/Search.js';


function SearchWrapper() {
  const { searchInput } = useParams();
  return <Search searchTerm={searchInput} />
}

function HeaderWrapper() {

  // hook para mudar a url do navegador programaticamente
  const navigate = useNavigate();

  function handleSubmit(e, searchInput) {
    e.preventDefault(); // impedir o recarregamento da página
    e.currentTarget.reset(); // limpa o campo do input depois do envio da mensagem //
    navigate(`/search/ ${searchInput}`); // Empurrar o usuário para a nova rota
  };

  return <Header handleSubmit={handleSubmit} />
}

function App() {
  return (

    <PhotoContextProvider>
      <BrowserRouter>
        <div>
          <HeaderWrapper />

          <Routes>
            {/* Rota inicial */}
            <Route path='/' element={<Navigate to='Islands' replace />} />


            {/* Rotas para as categorias fixas */}
            <Route path='/Islands' element={<Item searchTerm='Islands' />} />
            <Route path='/Archtecture' element={<Item searchTerm="Archtecture" />} />
            <Route path='/Coding' element={<Item searchTerm='Coding' />} />
            <Route path='/Coffe' element={<Item searchTerm='Coffe' />} />

            {/* Rota dinâmica = vai para onde digitar e mandar buscar no search*/}
            <Route path='/search/:searchInput' element={<SearchWrapper />} />

            {/* Rota Not Found */}
            <Route path='*' element={<NotFound />} />

          </Routes>

        </div>
      </BrowserRouter>
    </PhotoContextProvider>

  );
}

export default App;

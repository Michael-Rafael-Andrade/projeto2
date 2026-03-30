import './App.css';
import Header from './components/Header';
import PhotoContextProvider from './context/PhotoContext.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (

      <PhotoContextProvider>
        <BrowserRouter>
          <div>
            <Header />

            <Routes>
              {/* <Route path='/' element={} /> */}
            </Routes>

          </div>
        </BrowserRouter>
      </PhotoContextProvider>
      
  );
}

export default App;

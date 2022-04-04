import './App.css';
import HomePage from './Pages/HomePage/'
import { Route, Routes, Navigate } from 'react-router-dom'
import Helmet from 'react-helmet'

function App() {
  return (
    <>
      <div className="App">
        <Helmet title="Cupom Daki | R$ 30 de desconto | Fevereiro 2022" />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/*" render={() => <Navigate to="/"/>} element={<HomePage />} />
        </Routes>
      </div>
    </>

  );
}

export default App;



import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Country from './components/Country'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="country/:name" element={<Country />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import CountriesProvider from './components/CountriesProvider'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <CountriesProvider />
    </div>
  );
}

export default App;

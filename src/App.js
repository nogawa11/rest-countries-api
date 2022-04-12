import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import CountriesProvider from './components/CountriesProvider'
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <CountriesProvider>

      </CountriesProvider>
    </div>
  );
}

export default App;

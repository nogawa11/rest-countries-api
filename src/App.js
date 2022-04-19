import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;

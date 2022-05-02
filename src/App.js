import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import CountryDetails from './components/CountryDetails';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const changeTheme = () => {
    setIsDarkTheme(prevState => !prevState)
  }

  return (
    <div className={isDarkTheme ? "app" : "app light"}>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} changeTheme={changeTheme} />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="country/:name" element={<CountryDetails />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

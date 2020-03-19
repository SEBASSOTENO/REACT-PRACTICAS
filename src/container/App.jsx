import React from 'react';

import '../assets/style/app.scss';
import Header from'../components/Header';
import Footer from'../components/Footer';
import Carrusel from'../components/Carrusel';
import Search from '../components/Search';
import AppItem from '../components/AppItem';

const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Carrusel/>
        <AppItem/>
        <Footer/>
    </div>
);
export default App;
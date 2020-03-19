import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import HolaMundo from './components/Holamundo';
//import Stateful from './components/Stateful';

// import FBM from './components/Manzanas';


// import Header from '../src/components/Header';

// import Carrusel from '../src/components/Carrusel';
import Layout from '../src/container/App';

// import Search from '../src/components/Search';

//import Stateless from './components/Stateless';

ReactDOM.render( < Layout / > , document.getElementById('root'));

// ReactDOM.render( < Header / > , document.getElementById('root'));

// ReactDOM.render( < Carrusel / > , document.getElementById('root'));

// ReactDOM.render( < Search / > , document.getElementById('root'));

// ReactDOM.render( < HolaMundo / > , document.getElementById('root'));

//ReactDOM.render(<Stateful />, document.getElementById ('root') );

//ReactDOM.render(<Stateless />, document.getElementById ('root') );

//ReactDOM.render( < FBM text = "Guardar" / > , document.getElementById('root'));/

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
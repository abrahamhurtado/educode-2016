import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Children from './components/Children';
import Register from './components/Register'
import CrearVideo from './components/crearVideo.jsx';
import CrearTexto from './components/crearText.jsx';
>>>>>>> ac12c7ef09bbe35a99dd18d0144a12e07b147d46

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/children', component: Children },
    {path:'/register', component:Register}
    { path: '/create/video', component: CrearVideo },
    { path: '/create/text', component: CrearTexto }
  ]
}

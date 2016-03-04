import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Children from './components/Children';
import CrearVideo from './components/crearVideo.jsx';
import CrearTexto from './components/crearText.jsx';

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/children', component: Children },
    { path: '/create/video', component: CrearVideo },
    { path: '/create/text', component: CrearTexto }
  ]
}

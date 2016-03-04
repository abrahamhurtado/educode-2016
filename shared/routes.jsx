import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Children from './components/Children';
import cursoItem from './cursos_itemList/populate_cursos';
import Register from './components/Register'
import Register from './components/Register',
import Profile from './components/profile',
import Register from './components/Register';
import Profile from './components/profile';
import Create from './components/Create';
import NuevoCurso from './components/NuevoCurso';
import CrearVideo from './components/crearVideo.jsx';
import CrearTexto from './components/crearText.jsx';

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/children', component: Children },
    { path: '/cursos', component: cursoItem },
    {path:'/register', component:Register},
    {path:'/profile', component:Profile},
    {path:'/create', component:Create},
    {path:'/new', component:NuevoCurso},
    { path: '/create/video', component: CrearVideo },
    { path: '/create/text', component: CrearTexto }
  ]
}

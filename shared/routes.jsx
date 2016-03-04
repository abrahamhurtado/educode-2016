import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Children from './components/Children';
import cursoItem from './cursos_itemList/populate_cursos';
import Profile from './components/profile';
import Register from './components/Register';
import Create from './components/Create';
import NuevoCurso from './components/NuevoCurso.jsx';
import CrearVideo from './components/crearVideo.jsx';
import CrearTexto from './components/crearText.jsx';
import Search from './components/search.jsx'
import CrearQuiz from './components/crearQuiz.jsx';

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
    {path:'/busqueda', component:Search},
    {path:'/new', component:NuevoCurso},
    { path: '/create/video', component: CrearVideo },
    { path: '/create/text', component: CrearTexto },
    { path: '/create/quiz', component: CrearQuiz}
  ]
}

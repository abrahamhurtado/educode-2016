import React from 'react';
import CursosItemList from './cursos_itemList';


export default class CursosList extends React.Component{
	render () {
    var cursos = [
        {
          "courseID":0,
          "courseName":"Ecuaciones Diferenciales",
          "Percent":"30%",
          "courseInstructor":"Saúl García",
          "courseInfo":"Curso sobre calculo avanzado",
          "liked":true,
          "Category":["Matematicas"],
          "courseLikes":584,
          "subscribed":true,
          "private":false,
          "coursePassword":"",
          "courseLink":"/cursos/0",
					"courseChat":"true"
        },
        {
          "courseID":1,
          "courseName":"Aritmetica",
          "Percent":"80%",
          "courseInstructor":"Abraham Hurtado",
          "courseInfo":"Base básica de las matematicas",
          "liked":false,
          "Category":["Matematicas"],
          "courseLikes":200,
          "subscribed":true,
          "private":false,
          "coursePassword":"",
          "courseLink":"/cursos/1"
        },
        {
          "courseID":2,
          "courseName":"Ortografía",
          "Percent":"100%",
          "courseInstructor":"Ramón Ramírez",
          "courseInfo":"Base básica del español",
          "liked":true,
          "Category":["Español"],
          "courseLikes":140,
          "subscribed":true,
          "private":false,
          "coursePassword":"",
          "courseLink":"/cursos/2",
					"courseChat":"true"
        },
        {
          "courseID":3,
          "courseName":"Derivadas",
          "Percent":"0%",
          "courseInstructor":"Ramón Ramírez",
          "courseInfo":"Calculo I",
          "liked":false,
          "Category":["Matematicas"],
          "courseLikes":140,
          "subscribed":false,
          "private":false,
          "coursePassword":"",
          "courseLink":"/cursos/3"
        },
        {
          "courseID":4,
          "courseName":"Integrales",
          "Percent":"0%",
          "courseInstructor":"Ramón Ramírez",
          "courseInfo":"Calculo II",
          "liked":false,
          "Category":["Matematicas"],
          "courseLikes":140,
          "subscribed":false,
          "private":true,
          "coursePassword":"Integrales_123123",
          "courseLink":"/cursos/4"
        }
    ];

    return (
			<div>

    <div className="row">
      <div className="col s10 offset-s1 ">

      <h3> Mis cursos</h3>
      { cursos.filter(function (curso) {
          return curso.subscribed
      }).map(function(curso, i){
        return <CursosItemList key={i} curso={curso}/>
      })}
      <h3> Cursos recomendados</h3>
      { cursos.filter(function (curso) {
        return (!curso.subscribed && !curso.private)
      }).map(function(curso, i){
        return <CursosItemList key={i} curso={curso}/>
      })}
      </div>
      </div>
      </div>


    )
  	}
}

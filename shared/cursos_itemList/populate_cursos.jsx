import React from 'react';
import CursosItemList from './Cursos_itemList';

export default class CursosList extends React.Component{
	render () {
    var cursos = [
        {
          "courseID":"0",
          "courseName":"Ecuaciones Diferenciales",
          "Percent":"30%",
          "InstructorName":"Saúl García",
          "Rating":"5/5"
        },
        {
          "courseID":"1",
          "courseName":"Aritmetica",
          "Percent":"80%",
          "InstructorName":"Abraham Hurtado",
          "Rating":"5/5",
          "Category":["Matematicas"]
        },
        {
          "courseID":"2",
          "courseName":"Ortografía",
          "Percent":"100%",
          "InstructorName":"Ramón Ramírez",
          "Rating":"5/5",
          "Category":["Español"]
        }
    ];

    return  <div> { cursos.map(function(curso, i){
      return <CursosItemList key={i} curso={curso}/>
    }) }
    </div>


  	}
}

import React from 'react';

export default class CursosItemList extends React.Component{
	render () {
    	return (
				<div>
		    	<h1>{this.props.curso.courseName}</h1><h2>{this.props.curso.Percent}</h2>

		    	<p>{this.props.curso.InstructorName}</p>
		    	<p>Rating:{this.props.curso.Rating}</p>
    		</div>
			)
		}
}

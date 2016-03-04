import React from 'react';
import { Link } from 'react-router';



var alinearBoton = {
	verticalAlign: "bottom"
};


export default class CursosItemList extends React.Component{

	render () {
		console.log(this.props)
    	return (
				<div className="row">
					<div className="">
						<div className="card teal lighten-2">
							<div className="card-content">
								<span className="card-title"><Link to={this.props.curso.courseLink}>{this.props.curso.courseName}</Link> <span className="right">{this.props.curso.Percent}</span></span>
								<h5>Instructor: {this.props.curso.courseInstructor}</h5>
								<p>{this.props.curso.courseInfo}</p>

							</div>
							<div className="card-action">
								{ (this.props.curso.liked && this.props.curso.subscribed) ?
									(
										<div>
											<span>Este curso te gusta </span>
											<a href="#">
												<i className="2rem material-icons" style={alinearBoton}>thumb_up</i>
											</a>
											<span className="right">	Likes: {this.props.curso.courseLikes}</span>
										</div>
									) : (this.props.curso.subscribed) ?
									(
										<div>
											<span>¿Te gusta este curso? ¡Dale like! </span>
											<a href="#">
												<i className="2rem material-icons" style={alinearBoton}>thumb_up</i>
											</a>
											<span className="right">	Likes: {this.props.curso.courseLikes}</span>
										</div>
									) : (
										<div>
											<span>Suscribete al curso </span>
											
											<span className="right">	Likes: {this.props.curso.courseLikes}</span>
										</div>
									)
								}
							</div>
						</div>
					</div>
				</div>

			)
		}
}

import React from 'react';
import { Link } from 'react-router';
import styles from './profilePic.css';

export default class Register extends React.Component {

	render(){

		return(
		<div className="container-fluid">
			<div className="row "></div>
	    	<div className="row ">	    	
    			<form className="col s8 offset-s4">

    				<div className="row">
      					<div className="prof col s6">
      					
      						<img className="img-circle img-responsive center-block" src="http://www.allegraabbotsford.com/wp-content/uploads/2015/06/generic-profile.png"></img>
      						
      					</div>      					
      				</div>

      				<div className="row">
        				<div className="input-field col s6">
				          <input  id="first_name" type="text" className="validate" value="Daniel"></input>
				          <label className="active" for="first_name">Nombres</label>
						</div>
					</div>

					<div className="row">
					    <div className="input-field col s6">
					       <input id="last_name" type="text" className="validate" value="Grijalva"></input>
					       <label className="active" for="last_name">Apellidos</label>
					    </div>
					</div>

					<div className="row">
					    <div className="input-field col s6">
					        <input id="email" type="email" className="validate" value="jdgs.gt@gmail.com"></input>
					        <label className="active" for="email">Correo</label>
					    </div>
					</div>

					<div className="row">
					    <div className="input-field col s6">
					     	<input id="city" type="text" className="validate" value="Hermosillo"></input>
					      	<label className="active" for="city">Ciudad</label>
					   	</div>
					</div>


					<div className="row">
        				<div className="input-field col s6">
				          <input  id="age" type="number" className="validate" value="19"></input>
				          <label className="age" for="age">Edad</label>
						</div>
					</div>

					<div className="row">
						 <div className="switch col s6">
    						<label>
      							Mentor
      							<input type="checkbox"></input>
      							<span className="lever"></span>
      						</label>
  						 </div>

					</div> 

					<div className="row">
					      <div className="input-field col s6">
					        <button className="waves-effect waves-light btn" type="submit">Guardar</button>
					      </div>
					</div>
				</form>
			</div>
		</div>

			);

	}

}

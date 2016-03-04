import React from 'react';
import { Link } from 'react-router';
import Tags from './Tags';
import styles from './Menu.css'

export default class NuevoCurso extends React.Component {

	render(){

		return(

			<div className="container-fluid">
			<div className="row "></div>
	    	<div className="row ">	    	
    			<form className="col s8 offset-s4">

    				<div className="row">
					    <div className=" header col s6 ">
					        	
					        	<h1>Crear nuevo curso</h1>

					    </div>
					</div>


    				<div className="row">
					    <div className="input-field col s6">
					        <input id="name" type="text" className="validate" ></input>
					        <label className="active" for="name">Nombre</label>
					    </div>
					</div>
					
					<div className="row">
					    <div className="input-field col s6">
					        <input id="description" type="text" ></input>
					        <label className="active" for="description">Descripción</label>
					    </div>
					</div>

					<div className="row">
					    <div className="col s6">
					    	<label className="active" for="categorias">Categoría</label>
					        	<Tags
					    			ref="tags"
					    			categorias={[]}
					    		>

					    		</Tags>					       

					    </div>
					 </div>   
					   <div className="row">
						 <div className="switch col s6">
    						<label>
      							Privado
      							<input type="checkbox"></input>
      							<span className="lever"></span>
      						</label>
  						 </div>
  					</div> 

					<div className="row">
        				<div className="col s6">
        				<Link to="/create">
          					<button className="waves-effect waves-light btn" type="submit">Siguiente</button>
          				</Link>
        				</div>
      				</div>
					
				</form>
			</div>
		</div>

			);
	}
}


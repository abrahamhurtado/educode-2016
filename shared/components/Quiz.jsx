import React from 'react';
import { Link } from 'react-router';

export default class Quiz extends React.Component {
     render () {
     	
        return(
        <div className="row" >
        <form className="col s6 offset-s3">
           <div className="card" >
              <div className="card-content">
                <label><h4>Pregunta 1</h4></label>
                  <p><label>Cuanto es la derivada de 2x</label></p>
          		
                 <form action="#">
   				 <p>
     				 <input name="group1" type="radio" id="test1" />
     				 <label for="test1">2</label>
    			</p>
    			<p>
      				<input name="group1" type="radio" id="test2" />
      				<label for="test2">2x</label>
    			</p>
    			<p>
      				<input classNAme="with-gap" name="group1" type="radio" id="test3"  />
      				<label for="test3">2 + c</label>
    			</p>
                 </form>
              </div>
           </div>
        </form>
        <form className="col s6 offset-s3">
             <div className="card" >
              <div className="card-content">
                <label><h4>Pregunta 2</h4></label>
                  <p><label> Resuelve la siguiente ecuacion 2xdy/dx + 5ydy/dx</label></p>
          		
                 <form action="#">
   				 <p>
     				 <input name="group1" type="radio" id="test1" />
     				 <label for="test1">c1 + c2sen2x</label>
    			</p>
    			<p>
      				<input name="group1" type="radio" id="test2" />
      				<label for="test2">2</label>
    			</p>
    			<p>
      				<input classNAme="with-gap" name="group1" type="radio" id="test3"  />
      				<label for="test3">c1 + c2</label>
    			</p>
      			
                 </form>
              </div>
           </div>
        </form>
        <form className="col s6 offset-s3">
        <div className="card" >
              <div className="card-content">
                <label><h4>Pregunta 3</h4></label>
                  <p><label>Cuanto es 2 + 2 </label></p>
          		
                 <form action="#">
   				 <p>
     				 <input name="group1" type="radio" id="test1" />
     				 <label for="test1">2</label>
    			</p>
    			<p>
      				<input name="group1" type="radio" id="test2" />
      				<label for="test2">4</label>
    			</p>
    			<p>
      				<input classNAme="with-gap" name="group1" type="radio" id="test3"  />
      				<label for="test3">8</label>
    			</p>
      			
                 </form>
              </div>
           </div>
         </form>
        <form className="col s6 offset-s3">
            <div className="card" >
              <div className="card-content">
                <label><h4>Pregunta 4</h4></label>
                  <p><label>Integral de 2x dx</label></p>
          		
                 <form action="#">
   				 <p>
     				 <input name="group1" type="radio" id="test1" />
     				 <label for="test1">1/2 * x^2</label>
    			</p>
    			<p>
      				<input name="group1" type="radio" id="test2" />
      				<label for="test2">2x + c</label>
    			</p>
    			<p>
      				<input classNAme="with-gap" name="group1" type="radio" id="test3"  />
      				<label for="test3">2 </label>
    			</p>
      			
                 </form>
                 <Link to="/cursos/feedback" className="btn-floating btn-large waves-effect waves-light red right">Terminar</Link>
              </div>
           </div>

         </form>
        
      </div>
        );
    }
}
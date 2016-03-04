import React from 'react';
import { Link } from 'react-router';

export default class Video extends React.Component {
     render () {
     	
        return(
        	<div className="row">
        	<div className="col s6 offset-s3">
            <div className="video-container">
              <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
           </div> 
           <br/>
           <Link to="/cursos/quiz" className="waves-effect waves-light btn right" >Siguiente</Link>
           </div>
           </div>       
         );
     }
}
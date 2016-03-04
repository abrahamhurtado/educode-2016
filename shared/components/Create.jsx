import React from 'react';
import { Link } from 'react-router';

var styles = {
	materialIconsHack: {
		video:{
			fontSize: 120,
		    color: "red"
		},
		text:{
			fontSize: 120,
		    color: "#1565C0"
		},
		quiz:{
			fontSize: 120,
			color: "#01579B"
		}
		
	},
	centerText: {
		textAlign: "center"
	}
}

export default class Register extends React.Component {
     render () {
        return(
           <div className="row" style={styles.centerText}>
           <form className="col s6 offset-s3">
                <div className="card" >
               		<Link to="/create/video"><i className="material-icons" style={styles.materialIconsHack.video}>video_library</i></Link>
                    
    				<div className="card-content">
      					<p><Link to="/create/video">video</Link></p>
   					 </div>
                </div>
                <div className="card">
                	<Link to="/create/text"><i className="material-icons" style={styles.materialIconsHack.text}>description</i></Link>
                    
    				<div className="card-content">
      					<p><Link to="/create/text">Texto</Link></p>
   					 </div>
                </div>
                <div className="card">
                    <Link to="/create/quiz"><i className="material-icons" style={styles.materialIconsHack.quiz}>spellcheck</i></Link>
    				<div className="card-content">
      					<p><Link to="/create/quiz">Examen</Link></p>
   					 </div>
                </div>
                </form>
           </div>

         );
     }
}
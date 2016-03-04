import React from 'react';

export default class CrearVideo extends React.Component {
  render () {
    return (
      <div className="row">

          <form className="col s8 offset-s4">

          <div className="row">
              <div className=" header col s8">
                    
                    <h3>Ingresa la información del video</h3>

              </div>
          </div>

          <div className="row">          
            <div className="input-field col s6">
              <input className="validate" id="titulo" required type="text"></input>
              <label className="validate" for="titulo">Título de la lección</label>  
            </div>
          </div>
            

          <div className="row">          
            <div className="input-field col s6">
              <input className="validate" id="titulo" required type="text"></input>
              <label className="validate" for="titulo">Descripción de la lección</label>  
            </div>
          </div>

          <div className="row">          
            <div className="input-field col s6">
              <input className="validate" id="titulo" required type="url"></input>
              <label className="validate" for="titulo">Enlace del video</label>  
            </div>
          </div>
            <div className="row">
        <div className="col s6 ">
            <button className="waves-effect waves-light btn" type="submit">Guardar lección</button>
            <button className="btn-floating btn-medium waves-effect waves-light red right"><i className="material-icons">add</i></button>
        </div>
      </div>
        </form>
        </div>
    
    );
  }
}

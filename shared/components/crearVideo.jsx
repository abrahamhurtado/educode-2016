import React from 'react';

export default class CrearVideo extends React.Component {
  render () {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Ingresa la información del video</h3>
          <form>
            <div className="input-field">
              <label>Título de la lección</label>
              <input className="validate" id="titulo" required type="text" name="titulo" placeholder="Título de la lección"></input>
            </div>
            <p></p>
            <div className="input-field">
              <label>Descripción de la lección</label>
              <textarea className="materialize-textarea" required name="descripcion" placeholder="Descripción de la lección"/>
            </div>
            <div className="input-field">
              <label>Dirección del video</label>
              <input required type="url" placeholder="Un vídeo de YouTube, por ejemplo"></input>
            </div>
            <button className="waves-effect waves-light btn" type="submit">Guardar lección</button>
            <button className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></button>
        </form>
        </div>
      </div>
    );
  }
}

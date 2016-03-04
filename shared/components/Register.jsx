import React from 'react';
import { Link } from 'react-router';


export default class Register extends React.Component {

  render () {
    return (
      <div className="row">
    <form className="col s8 offset-s4">
      <h3>Registro de usuario</h3>
      <div className="row">
        <div className="input-field col s6">
          <input  id="first_name" type="text" className="validate"></input>
          <label className="active" for="first_name">Nombres</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"></input>
          <label className="active" for="last_name">Apellidos</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="email" type="email" className="validate"></input>
          <label className="active" for="email">Correo</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="city" type="text" className="validate"></input>
          <label className="active" for="city">Ciudad</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <button className="waves-effect waves-light btn" type="submit">Guardar</button>
        </div>
      </div>
    </form>
  </div>

    );
  }
}

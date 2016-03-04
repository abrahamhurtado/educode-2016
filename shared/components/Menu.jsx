import React from 'react';
import { Link } from 'react-router';


export default class HelloWorld extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
    <nav>
      <div
        className={ "nav-wrapper teal darken-3" }
      >

      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">

        <li>
            <input type="search" placeholder="Cursos">

            </input>
        </li>
        <li>
          <a href="#">
                <i className="material-icons">search</i>
          </a>
        </li>

        <li>
          <a className="dropdown-button" href="#" data-activates='dropCategorias'  data-beloworigin="true">
                Categorías
          </a>
        </li>

        <li>

        <a className="dropdown-button" href="#" data-activates='dropPerfil'  data-beloworigin="true">
                <i className="material-icons" data-activates="'dropPerfil">perm_identity</i>
          </a>

        </li>
      </ul>



      <ul id='dropCategorias' className='dropdown-content' >
        <li>
          <Link to="#!">#categoria</Link>
        </li>
        <li>
          <Link to="#!">#categoria</Link>
        </li>
      </ul>

      <ul id='dropPerfil' className='dropdown-content'>
        <li>
          <Link to="/profile">Mi Perfil</Link>
        </li>

        <li>
          <Link to="/profile">Nuevo Curso</Link>
        </li>
        <li>
          <Link to="#!">Salir</Link>
        </li>
      </ul>

      </div>
    </nav>
    );
  }
}

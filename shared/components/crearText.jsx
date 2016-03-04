import React from 'react';
import marked from 'marked';
import styles from './Menu.css';

export default class CrearTexto extends React.Component {
  constructor () {
    super();
    this.rawMarkup = this.rawMarkup.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.state = {
      text: '#### Aquí va el título de la lección'
    }
  }
  updateCode (e) {
    e.preventDefault();
    this.setState({
      text: this.refs.textarea.value
    });
  }
  rawMarkup () {
    return { __html: marked(this.state.text, {sanitize: true})};
  }
  render () {
    return (
      <div className="row">
      <form>
      <div className="col s8 offset-s4">
          <h3>Ingresa la información del texto</h3>
          <div className="input-field col s6">
            <label>Texto de la lección n</label>
            <textarea ref="textarea" className="materialize-textarea" required name="descripcion" value={this.state.text} onChange={this.updateCode}/>
          </div>
      </div>

      <div className="col s8 offset-s4">
        <div className="col s6">
          <label>Previo de la lección &nbsp;<a href="http://i.imgur.com/8FrVbI6.png" target="_blank"> Ayuda con formato</a></label>
          <div
            dangerouslySetInnerHTML={this.rawMarkup()}
          >
          </div>          
        </div>
      </div>

      <div className="row">
      </div>
      <div className="col s8 offset-s4">
        <div className="col s6 ">
            <button className="waves-effect waves-light btn" type="submit">Guardar lección</button>
            <button className="btn-floating btn-medium waves-effect waves-light red right"><i className="material-icons">add</i></button>
        </div>
      </div>
    
      </form>
     </div>
        
    )
  }
}

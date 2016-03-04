import React from 'react';
import marked from 'marked';

export default class CrearTexto extends React.Component {
  constructor () {
    super();
    this.rawMarkup = this.rawMarkup.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.state = {
      text: '# Aquí va el título de la lección'
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
      <form className="col s8 offset-s2">
      <div className="card">
        <div className="card-content">
          <h3>Ingresa la información del texto</h3>
          <div className="input-field">
            <label>Texto de la lección n</label>
            <textarea ref="textarea" className="materialize-textarea" required name="descripcion" value={this.state.text} onChange={this.updateCode}/>
          </div>
          <a href="https://guides.github.com/features/mastering-markdown/">Referencia de markdown</a>
          <h4>Previo de la lección</h4>
          <div
            dangerouslySetInnerHTML={this.rawMarkup()}
          >
          </div>
          <button className="waves-effect waves-light btn" type="submit">Guardar lección</button>
          <button className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></button>
        </div>
      </div>
      </form>
      </div>
    )
  }
}

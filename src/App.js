import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noticias : []
    }
  }

  

  async componentDidMount() {

    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const api_key = 'APY_KEY';
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${api_key}`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  }

  render () {
    return (
      <Fragment>

        
        <Header titulo="Noticias API"/>

        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias noticias={this.state.noticias}/>
        </div>

      </Fragment>
    )
  }
  
}

export default App;

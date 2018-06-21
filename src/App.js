import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './ui/layouts/Layout';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Matches, TeamDetail } from './ui/components/index';
import store from './store/store';
import { Provider } from 'react-redux';

/*
Classe principale comme point d'entrée après index.js
Les premiers codes HTML se trouvent ici
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">World Cup 2018</h1>
        </header>
        {/* Provider est utilisé par 'Redux' qui est un système pour passer des données entre les composants */}
        <Provider store={store}>
          <BrowserRouter>
            {
              /*
              Le composant Layout représente la navigation (ou bien le menu)
             */
            }
            <Layout>
              {/*Les routes permettent de gérer les liens (voir dans Layout.js) */}
              {
                /*
                La route '/' est gérée par le composant Home.js)
                Ca veut dire que si votre site tourne à l'adresse http://localhost:3000
                Si on se rend à http://localhost:3000/ c'est le composant Home qui va être chargé ici.
                
                Dans Layout vous verrez le code suivant : {this.props.children}
                C'est ce qui permet d'injecter le rendu de Home à cet endroit
                */
              }
              <Route exact path="/" component={Home} />
              <Route path="/matches" component={Matches} />
              <Route path="/team/:code" component={TeamDetail} />
            </Layout>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

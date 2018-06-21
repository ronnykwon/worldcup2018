import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Programme</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/groups'}>Groupes</Link>
                </li>
                <li className="nav-item">
                    {/*<Link className="nav-link" to={'/matches'}>Matches (not working)</Link>*/}
                </li>
            </ul>
        <div>
            {/* C'est ici qu'on charge le composant en fonction de l'url qui a été demandée (voir App.js, composant Route) */}
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;

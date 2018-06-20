import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/matches'}>Matches (not working)</Link>
                </li>
            </ul>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;

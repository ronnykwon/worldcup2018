import React, { Component } from 'react';
import {Group, Team} from '../containers/index';
import { connect } from 'react-redux'
import { fetchGroups } from '../../actions/action';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            groups : []
        }
    }

  render() {
      const groupItems = this.props.groups.map( (group, i) => {
        return ( <div className="col-6"> <Group group={group.group}/></div>);
      });
    return (
        <div className="container-fluid">
            <div className="row">
                { groupItems }    
            </div>
        </div>
    );

  }

  // on récupère les données depuis l'API et on envoie le résultat dans le dispatcher (fetchGroups)
  // componentDidMount est automatiquement exécuté par React
  componentDidMount() {
      // on charge les données depuis l'api 
      fetch("http://worldcup.sfg.io/teams/group_results")
      // ca renvoie du json donc on convertit le résultat en json
      .then(res => res.json())
      // ensuite on traite le résultat, on va notifier via redux que l'on a reçu des données
      // ici les informations des différents groupes 
      .then(
          (result) => {
              this.props.dispatch(fetchGroups(result));
          }
      )
  }
}


const mapStateToProps = state => {
    return {
        groups : state.groups.groups
    }
}

export default connect(mapStateToProps)(Home);

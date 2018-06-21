import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTeam } from '../../actions/action';
import ReactLoading from "react-loading";

import {Match} from '../containers/index';

class TeamDetail extends Component {
    load() {
        // on charge les données depuis l'api 
        console.log(`load with : ${this.props.match.params.code}`);
        fetch(`https://world-cup-json.herokuapp.com/matches/country?fifa_code=${this.props.match.params.code}`)
        // ca renvoie du json donc on convertit le résultat en json
        .then(res => res.json())
        // ensuite on traite le résultat, on va notifier via redux que l'on a reçu des données
        // ici les informations des différents groupes 
        .then(
            (result) => {
                console.log(result);
                this.state.isLoaded = true;
                this.props.dispatch(fetchTeam(result));
                this.state.code = this.props.match.params.code;
            }
        )
    }

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            team: {},
            code: null
        }
    }

  render() {
      console.log(this.props.team);
      if (this.state.code !== this.props.match.params.code) {
          console.log('loading data');
          this.state.isLoaded = false;
          this.load();
      }
      if (this.state.isLoaded) {
            const countryTeam = this.props.teams.filter( t => t.fifa_code === this.props.match.params.code)[0].country;
            const matches = this.props.team.map( (match, i) => 
            {
                return (<Match key={i} match={match} code={this.props.match.params.code}/>)
            });
            return (
                <div className="container-fluid">
                    <h2>{countryTeam}</h2>
                    {matches}
                </div>
            );
        }
        else {
            return(
                <div className="d-flex justify-content-center">
                    <ReactLoading type="bubbles" color="black" />
                </div>
            )
        }
  }  
  
  componentDidMount() {
    this.load();
  }


}


const mapStateToProps = state => {
  return {
      team : state.worldcup.team,
      teams: state.worldcup.teams
  }
}

export default connect(mapStateToProps)(TeamDetail);

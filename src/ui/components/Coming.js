import React, { Component } from 'react';
import {Match} from '../containers/index';
import { connect } from 'react-redux'
import { fetchMatchToday, fetchMatchTomorrow } from '../../actions/action';
import ReactLoading from "react-loading";

class Coming extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isTodayLoaded: false,
            isTomorrowLoaded: false,
            todayMatches : [],
            tomorrowMatches : []
        }
    }

  render() {
    let htmlContent = [];
    if(this.state.isTodayLoaded)
    {
       this.props.matchesToday.map( (match, i) => {
            htmlContent.push(<div className="col-12"> <Match match={match}/></div>);
        });
    }
    else {
        htmlContent.push(
            <div key={1} className="col-12 d-flex justify-content-center">
                Chargement des matches du jour <br/>
                <ReactLoading type="bubbles" color="black" />
            </div>
        )
    }


    if(this.state.isTomorrowLoaded)
    {
        this.props.matchesTomorrow.map( (match, i) => {
            htmlContent.push(<div className="col-12"> <Match match={match}/></div>);
        });
    }
    else {
        htmlContent.push(
            <div key={2} className="col-12 d-flex justify-content-center">
                Chargement des matches à venir <ReactLoading type="bubbles" color="black" />
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row">
                { htmlContent }        
            </div>
        </div>
    );
  }

  // on récupère les données depuis l'API et on envoie le résultat dans le dispatcher (fetchGroups)
  // componentDidMount est automatiquement exécuté par React
  componentDidMount() {
      // on charge les données depuis l'api 
      fetch("https://world-cup-json.herokuapp.com/matches/today")
      // ca renvoie du json donc on convertit le résultat en json
      .then(res => res.json())
      // ensuite on traite le résultat, on va notifier via redux que l'on a reçu des données
      // ici les informations des différents groupes 
      .then(
          (result) => {
              // on change l'état de chargement 
              console.log(result);
              this.state.isTodayLoaded = true;
              this.props.dispatch(fetchMatchToday(result.reverse()));
          }
      ).catch( (err) => console.log(err));

      fetch("https://world-cup-json.herokuapp.com/matches/tomorrow")
      // ca renvoie du json donc on convertit le résultat en json
      .then(res => res.json())
      // ensuite on traite le résultat, on va notifier via redux que l'on a reçu des données
      // ici les informations des différents groupes 
      .then(
          (result) => {
              // on change l'état de chargement 
              this.state.isTomorrowLoaded = true;
              this.props.dispatch(fetchMatchTomorrow(result.reverse()));
          }
      )
  }
}


const mapStateToProps = state => {
    return {
        matchesToday : state.worldcup.matchesToday,
        matchesTomorrow: state.worldcup.matchesTomorrow
    }
}

export default connect(mapStateToProps)(Coming);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Match.css';
import 'moment/locale/fr';
import Moment from 'react-moment';

class Match extends Component {
    
  render() {
    const calendarStrings = {
        lastDay : '[Hier à] LT',
        sameDay : '[Aujourd\'hui à] LT',
        nextDay : '[Demain à] LT',
        lastWeek : 'dddd [dernier à] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };

    let bgColor = 'bg-secondary';
    if(this.props.match.status === 'completed') {
        if(this.props.match.winner_code === this.props.code)
            bgColor = 'bg-success';
        else
            bgColor = 'bg-danger';
    }
        
    return (
        <div className="row match">
        <div className={`col-12 card text-center ${bgColor}`}>
            <div className="card-body">
                <h5 className="card-title"><FontAwesome name="calendar"/>  <Moment locale="fr" calendar={calendarStrings}>{this.props.match.datetime}</Moment></h5>
                <div className="card-text row">
                <div className="col-5">
                {this.props.match.home_team.country}
            </div>
            <div className="col">
                VS
            </div>
            <div className="col-5">
                {this.props.match.away_team.country}
            </div>
                </div>
            </div>
        </div>
            
            
        </div>
    )
  }
}

Match.propTypes = {
    match: PropTypes.shape({
        
    })
}

export default Match;

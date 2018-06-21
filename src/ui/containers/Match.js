import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Match.css';
import 'moment/locale/fr';
import Moment from 'react-moment';
import FlagIcon from '../../FlagIcon';
import { Link } from 'react-router-dom';

class Match extends Component {
    
  render() {
    const calendarStrings = {
        lastDay : '[Hier à] LT',
        sameDay : '[Aujourd\'hui à] LT',
        nextDay : '[Demain à] LT',
        lastWeek : 'dddd [dernier à] LT',
        nextWeek : 'dddd [à] LT',
        sameElse : 'L'
    };

    let bgColor = 'bg-info';
    let awayScore, homeScore;
    if(this.props.match.status === 'completed') {
        awayScore = (<div><FontAwesome name="futbol"/> {this.props.match.away_team.goals}</div>)
        homeScore = (<div><FontAwesome name="futbol"/> {this.props.match.home_team.goals}</div>)
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
                <div className="col-lg-5 col-md-12">
                    <FlagIcon code={this.props.match.home_team.code.substring(0,2).toLowerCase()} size="2x"/><br/>
                    <Link className="team-link" to={`/team/${this.props.match.home_team.code}`}>{this.props.match.home_team.country}</Link>
                {homeScore}

            </div>
            <div className="col-lg-2 col-md-12">
                VS
            </div>
            <div className="col-lg-5 col-md-12">
                <FlagIcon code={this.props.match.away_team.code.substring(0,2).toLowerCase()} size="2x"/><br/>
                <Link className="team-link" to={`/team/${this.props.match.away_team.code}`}>{this.props.match.away_team.country}</Link>
            {awayScore}
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

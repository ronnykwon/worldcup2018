import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlagIcon from '../../FlagIcon';

class Team extends Component {
    
  render() {
        return (
            <div className="col-6">
                <div>
                    <FlagIcon code={this.props.team.fifa_code.substring(0,2).toLowerCase()}/> 
                </div>
                <span>
                    { this.props.team.country} <span class="badge badge-light">{this.props.team.points}</span>
                </span>
            </div>
        )
  }
}

Team.propTypes = {
    team: PropTypes.shape({
        country: PropTypes.string.isRequired
    })
}

export default Team;

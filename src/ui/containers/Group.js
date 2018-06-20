import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Team from './Team';

class Group extends Component {
    
  render() {
    console.log(this.props.group);
    const teams = this.props.group.teams.map((team, i) => {
        console.log(team);
        return (
            <Team team={team.team} />
        )
    });
    return (
        <div className="row">
            <div className="col-12">
                <h2>{ this.props.group.letter }</h2>
                <div className="row">
                    { teams }
                </div>
            </div>

        </div>
    );
  }
}

Group.propTypes = {
    group: PropTypes.shape({
        letter: PropTypes.string.isRequired
    })
}

export default Group;

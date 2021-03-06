import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlagIcon from '../../FlagIcon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Team extends Component {
    
  render() {
        return (
            <div className="col-lg-6 col-md-12">
                <Link to={`/team/${this.props.team.fifa_code}`}> 
                    <div>
                        <FlagIcon code={this.props.team.fifa_code.substring(0,2).toLowerCase()}/>     
                        <span>
                            { this.props.team.country} 
                            <span class="badge badge-light">{this.props.team.points}</span>
                        </span>
                    </div>
                </Link>
            </div>
        )
  }
}

Team.propTypes = {
    team: PropTypes.shape({
        country: PropTypes.string.isRequired
    })
}

const mapStateToProps = state => {
  return {
      teams : state.worldcup.teams
  }
}

export default connect(mapStateToProps)(Team);

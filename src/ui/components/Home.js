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
      console.log(JSON.stringify(this.props));
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

  componentDidMount() {
      fetch("http://worldcup.sfg.io/teams/group_results")
      .then(res => res.json())
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

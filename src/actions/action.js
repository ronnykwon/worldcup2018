import actionTypes from '../constants/actionTypes';

function groupsReceived(groups){
    return {
        type: actionTypes.GROUPS_RECEIVED,
        groups: groups
    }
}

function teamReceived(team) {
    return {
        type: actionTypes.TEAM_RECEIVED,
        team: team
    }
}

export function fetchGroups(groups) {
    return dispatch => {
        dispatch(groupsReceived(groups))
    }
}

export function fetchTeam(team) {
    return dispatch => {
        dispatch(teamReceived(team))
    }
}
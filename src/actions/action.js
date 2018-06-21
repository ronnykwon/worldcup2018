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

function matchTodayReceived(matchesToday) {
    return {
        type: actionTypes.MATCH_TODAY_RECEIVED,
        matchesToday: matchesToday
    }
}

function matchTomorrowReceived(matchesTomorrow){
    return {
        type: actionTypes.MATCH_TOMORROW_RECEIVED,
        matchesTomorrow: matchesTomorrow
    }
}

export function fetchMatchToday(matches) {
    return dispatch => {
        dispatch(matchTodayReceived(matches));
    }
}

export function fetchMatchTomorrow(matches) {
    return dispatch => {
        dispatch(matchTomorrowReceived(matches));
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
import actionTypes from '../constants/actionTypes';

function groupsReceived(groups){
    return {
        type: actionTypes.GROUPS_RECEIVED,
        groups: groups
    }
}

export function fetchGroups(groups) {
    return dispatch => {
        dispatch(groupsReceived(groups))
    }
}
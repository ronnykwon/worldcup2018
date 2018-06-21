import constants from '../constants/actionTypes'

var initialState = {
  groups: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.GROUPS_RECEIVED:
      updated['groups'] = action.groups
      return updated
  case constants.TEAM_RECEIVED:
      updated['team'] = action.team
      return updated
    default:
      return state
    }
}
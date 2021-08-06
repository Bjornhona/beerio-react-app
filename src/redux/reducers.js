import {ACTIONS} from './actions';

const rootReducer = (brewery = {}, action) => {
  switch (action.type) {
    case ACTIONS.SET_BREWERY:
      return action.payload
    // case ACTIONS.GET_BREWERY:
    //   return action.payload
    default:
      return brewery
  }
}

export default rootReducer;
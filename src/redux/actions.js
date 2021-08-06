export const ACTIONS = {
  SET_BREWERY: 'SET_BREWERY',
  GET_BREWERY: 'GET_BREWERY'
}

export const setBrewery = (brewery) => {
  return {
    type: ACTIONS.SET_BREWERY,
    payload: brewery
  }
}
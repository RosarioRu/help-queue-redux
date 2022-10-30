
const reducer = (state = {}, action) => {
  const { type, names, location, issue, id } = action;
  switch(type) {
  case "ADD_TICKET":
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
    break;
  case "DELETE_TICKET":
    let newState = { ...state };
    delete newState[id];
    return newState;
    break;
  case "UPDATE_TICKET":
    let copyOfState = { ...state };
    const ticketToUpdate = copyOfState[id];
    const updatedTicket = { ...ticketToUpdate, names: (action.names || ticketToUpdate.names), issue: (action.issue || ticketToUpdate.issue), location: (action.location || ticketToUpdate.location) };
    delete copyOfState[id];
    return { ...copyOfState, [id] : updatedTicket};
    break;

  default: 
    return state;
  }
};

export default reducer;
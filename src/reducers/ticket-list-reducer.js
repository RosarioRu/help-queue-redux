
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
    const updatedTicket = { ...ticketToUpdate, names: action.names, issue: (action.issue || ticketToUpdate.issue)};
    
    delete copyOfState[id];
    return { ...copyOfState, [id] : updatedTicket};
    // return  { ...copyOfState, updatedTicket};
    // return Object.assign({}, copyOfState, {
    //   [id]: {
    //     names: names,
    //     id: id,
    //     issue: issue,
    //     location: location
    //   }
    
    console.log("hi");
    break;

  // case "UPDATE_TICKET":
  //   return Object.assign({}, state, {
  //     [id]: {
  //       names: names,
  //       location: location,
  //       issues: issue,
  //       id: id
  //     }
  //   });
  //   break;
  default: 
    return state;
  }
};

export default reducer;
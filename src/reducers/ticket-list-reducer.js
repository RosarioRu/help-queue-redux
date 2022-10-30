
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
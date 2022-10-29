
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
  default: 
    return state;
  }
};

export default reducer;
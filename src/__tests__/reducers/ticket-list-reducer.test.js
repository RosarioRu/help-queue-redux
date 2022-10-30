import ticketListReducer from "../../reducers/ticket-list-reducer";

describe("ticketListReducer", () =>  {

  let action; //Each tests will define w/the action should be
  const ticketData = { //provides ticket info. for testing purposes
    names: "Ryan & Aimen",
    location: "4b",
    issue: "Redux action is not working correctly.",
    id: 1
  };
  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1 
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  }

  //TEST 1
  test("Should return default state if there is no action type passed into the reducer", () => {expect(ticketListReducer({}, {type: null})).toEqual({});
  });

  //TEST 2
  test("Should successfully add new ticket data to main TicketList", () => {
    const {names, location, issue, id} = ticketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  //TEST 3
  test("Should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });

  //TEST 4
  test("Should successfully update an existing ticket's name property", () => {
    action = {
      type: "UPDATE_TICKET",
      id: 2,
      names: "test & test",
      // location: "2a",
      // issue: "Reducer has side effects."
    };
    const thisState = {
      1: {
        names: 'Ryan & Aimen',
        location: '4b',
        issue: 'Redux action is not working correctly.',
        id: 1 
      }, 2: {
        names: 'Bob and Jane',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    };
    expect(ticketListReducer(thisState, action)).toEqual({
      1: {
        names: 'Ryan & Aimen',
        location: '4b',
        issue: 'Redux action is not working correctly.',
        id: 1 
      }, 2: {
        names: 'test & test',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });

  //TEST 5
  test("Should successfully update an existing ticket's issue property", () => {
    action = {
      type: "UPDATE_TICKET",
      id: 2,
      issue: "updated issue test."
    };
    expect(ticketListReducer(currentState, action)).toEqual(
      {
        1: {
          names: 'Ryan & Aimen',
          location: '4b',
          issue: 'Redux action is not working correctly.',
          id: 1 
        }, 2: {
          names: 'Jasmine and Justine',
          location: '2a',
          issue: 'updated issue test.',
          id: 2 
        }
      }
    );
  });
    
  



});
const createStore = require("redux").createStore;
// reducer => function to produce "new state" [data]
// reducer => is a function take two parameters (initial state = old state, action)
/* 
// The solution is the first method
const reducer = (state = [], action) => {
    if (action.type === "to_array") {
        return action.data.split(" ");
    }
    return state;
};
*/
// The solution is the next method
const reducer = (state = [], action) => {
  switch (action.type) {
    case "to_array":
      return action.data.split(" ");
    case "add":
      let values = state;
      values.push(actionTwo.data);
      return values;
    default:
      return state;
  }
};
// store => The only source of truth
const store = createStore(reducer);
// action => javascript object plane : should have contain mandatory property name is type
const action = {
  type: "to_array",
  data: "hello redux",
};

console.log(store.getState());
// pass action object to reducer function by store.dispatch
store.dispatch(action);
console.log(store.getState());

const actionTwo = {
  type: "add",
  data: "from masrawy",
};

store.dispatch(actionTwo);
console.log(store.getState());

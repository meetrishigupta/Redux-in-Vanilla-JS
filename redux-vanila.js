//importing redux
const redux = require("redux");

//intial value of state;

const intialState = {
  todos: [],
};


//Actions

const ADD_TODO = "add TODO";  //write anything here you want
const TOGGLE_Todo = "toggle TODO"; //same above

//Action Creater is a function that have to define that Type of action and what do do like text or toggle

const addTodo = (text) => ({
  text,
  type: ADD_TODO,
});

const toggleTODO = (index) => (
    { index, type: TOGGLE_Todo }
    
    );


// create reducer that is pure function in javascript
//Reducer must return the update state
function todoApp(state = intialState, action) {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          text: action.text,
          completed: false,
        },
      ],
    };
  }

  if (action.type === TOGGLE_Todo) {
    return {
      ...state,
      todos: state.todos.map((todo, i) => {
        if (i == action.index) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    };
  } 
}

//create store
const store = redux.createStore(todoApp);

//disptaching action
store.dispatch(addTodo("morning walk at 9"));
store.dispatch(addTodo("office at 12"));
store.dispatch(toggleTODO(0));

//Read data from store

console.log(store.getState());

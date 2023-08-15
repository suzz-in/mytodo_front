import { Action, TodoState } from "../type/todo";




const todoReducer = (state : TodoState, action: Action) => {
  const nextId = Math.max(0, ...state.map(todo => todo.id))+1;

    switch (action.type) {
      case "ADD":
        return state.concat({
          id: nextId,
          text:action.text,
          done: false
        })
  
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      case "EDIT" : 
        return  state.map((task) => (task.id === action.id ? { ...action } : task));
      default:
        return state;
    }
  };
  
  export default todoReducer;
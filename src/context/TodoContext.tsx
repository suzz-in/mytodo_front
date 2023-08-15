import { Dispatch, createContext, useReducer } from "react";
import todoReducer from "../helpers/useTodoReducer";
import { Action, TodoState } from "../type/todo";


type TodoDispatch = Dispatch<Action>
export const TodoDispatchContext = createContext<TodoDispatch | null>(null);
export const TodoStateContext = createContext<TodoState | null>(null)


export function TodoContextWrapper({children}:{children:React.ReactNode}) {
    const [todos, dispatch] = useReducer(todoReducer, [])

    return (
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todos}>
                {children}
            </TodoStateContext.Provider>
        </TodoDispatchContext.Provider>
    )
}
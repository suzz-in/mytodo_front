import { useContext } from "react";
import { TodoStateContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {

        const ListState = () => {
            const state = useContext(TodoStateContext);
            if(!state) throw new Error("error")
            return state;
        }

        const todos = ListState();


    return(
        <article>
           {todos.length === 0 ? <div className="pt-8">오늘 할 일은 무엇인가요?😇</div> : todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/>) }
        </article>
    )
}

export default TodoList;
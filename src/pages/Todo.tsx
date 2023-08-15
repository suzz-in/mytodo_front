import TodoCreate from "../components/TodoCreate";
import { TodoContextWrapper } from "../context/TodoContext";
import TodoList from "../components/TodoList";

const Todo = () => {


    return (<>
    <TodoContextWrapper>
    <header className="text-4xl mb-4 pb-4 font-bold">MY TODO</header>
    <TodoCreate />
    <TodoList />
    </TodoContextWrapper>
    </>)
}

export default Todo;
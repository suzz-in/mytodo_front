import { useContext, useRef } from "react";
import { Todo } from "../type/todo";
import { TodoDispatchContext } from "../context/TodoContext";


const TodoItem = ({todo}: {todo: Todo}) => {

    const dispatch = useContext(TodoDispatchContext)


    const edit = () => {
        if(!dispatch) throw new Error("dispatch is null")
        dispatch({
            type: "EDIT",
            id:todo.id
        })
    }


    const remove = () => {
        if(!dispatch) throw new Error("dispatch is null")
        const notifyRemove = window.confirm("삭제하시겠습니까?")
        if(notifyRemove){
            dispatch({type:"DELETE", id: todo.id})
        }
        
    }
    return (<div className="flex gap-3 my-4">
        <input type='checkbox' checked={todo.done} onChange={edit}/>
        <p className="pt-0.5">{todo.text}</p>
        <button className="bg-slate-200 w-10 px-2 text-xs" onClick={remove}>삭제</button>
    </div>)
}

export default TodoItem;
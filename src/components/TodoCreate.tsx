import { useContext, useState } from "react";
import { TodoDispatchContext } from "../context/TodoContext";

const TodoCreate = () => {
//form 태그에서 useState와 ref의 차이 뭐가 더 효율적인지?
    const [input, setInput] = useState<string>("");

    const dispatch =useContext(TodoDispatchContext);

    const handleAddTodo = (e:React.FormEvent) => {
        e.preventDefault();
        if(input !== ""){
            if(!dispatch) throw new Error("dispatch is null")
            dispatch({
                type:"ADD",
                text: input,
            })
            setInput("")
        }

    }

    return (
        <form onSubmit={handleAddTodo} className="flex gap-2 mt-2">
            <input autoFocus placeholder="오늘 할 일😝" value={input} onChange={e => setInput(e.target.value)} className="border-2 border-solid  border-slate-300 rounded-lg p-1"/>
            <button className="w-20 text-m bg-slate-300">등록하기</button>
        </form>
    )
}

export default TodoCreate;
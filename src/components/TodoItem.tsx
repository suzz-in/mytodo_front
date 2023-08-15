import { ChangeEvent, useCallback, useContext,  useState } from "react";
import { Todo } from "../type/todo";
import { TodoDispatchContext } from "../context/TodoContext";


const TodoItem = ({todo}: {todo: Todo}) => {
    const [modifyToggle, setModifyToggle] = useState<boolean>(false)
    const [content, setContent] = useState<Todo>(todo || "")


    const dispatch = useContext(TodoDispatchContext)

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>)=> {
        setContent({...content, text:e.target.value || ""})
    },[content])



    const cenCelBtnClick = () => {
        setContent({...content, text: todo.text});
        setModifyToggle(false)
    }

    const editCompleteBtnClick = () => {
        if(!content.text) {
            alert("할 일을 입력해주세요😵")
            return ;
        } 
        update(content)
        setModifyToggle(false)
    }
    
    const update = useCallback((content:Todo)=>{
        if(!dispatch) throw new Error("dispatch is null")
        dispatch({type:"EDIT", text: content.text, id:content.id, done:content.done})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[content, todo])
    
    
    
    const onCheck = () => {
        if(!dispatch) throw new Error("dispatch is null")
        setContent({...content, done: !todo.done})
        dispatch({
            type: "EDIT",
            text: content.text,
            id: content.id,
            done: !todo.done
        })
    }


    const remove = () => {
        if(!dispatch) throw new Error("dispatch is null")
        const notifyRemove = window.confirm("삭제하시겠습니까?")
        if(notifyRemove){
            dispatch({type:"DELETE", id: todo.id})
        }
        
    }
    return (
    <div className="flex gap-3 my-4">
        {modifyToggle ? 
        <>
        <input defaultValue={content.text} autoFocus onChange={onInputChange}/>
        <button onClick={editCompleteBtnClick}>완료</button>
        <button onClick={cenCelBtnClick}>취소</button>
        </> 
        :
         <> 
         <input type='checkbox' checked={content.done} onChange={onCheck}/>
        <p className="pt-0.5">{content.text}</p>
        <button className="bg-slate-200 w-10 px-2 text-xs" onClick={()=> setModifyToggle(true)}>수정</button>
        <button className="bg-slate-200 w-10 px-2 text-xs" onClick={remove}>삭제</button>
        </>}
       
    </div>
    )
}

export default TodoItem;
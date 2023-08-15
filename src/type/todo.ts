export type Todo = {
    id : number,
    text : string,
    done : boolean
}

export type TodoState = Todo[];


export type Action = 
{type: "ADD"; text: string} | {type: "EDIT"; id: number} | {type: "DELETE"; id:number}

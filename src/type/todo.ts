export type Todo = {
    id : number,
    text : string,
    done : boolean
}

export type TodoState = Todo[];


export type Action = 
{type: "ADD"; text: string} | {type: "ONCHECK"; id: number} | {type: "DELETE"; id:number} |{type : "EDIT"; text: string, id: number, done: boolean}

import React from 'react'
import { todos } from '../type/todos'
import "./index.css"
type Props={
    todosArr:todos[],
    setTodosArr: React.Dispatch<React.SetStateAction<todos[]>>
    deleteMessage:(id:number)=>void
    handleChecked:(id:number)=>void
 
}
const Message:React.FC<Props> = ({todosArr,setTodosArr,deleteMessage,handleChecked}) => {
  return (
    <div>
        <ul>
            {
todosArr.map((todo)=>(
    <li key={todo.id}>
        <span >{todo.id + " " + todo.text} </span>
    <button onClick={()=>deleteMessage(todo.id)}>del</button>
    <button onClick={()=>handleChecked(todo.id)}>checked</button>
    </li>
))
            }
        </ul>
    </div>
  )
}

export default Message
import React, { useState } from 'react'
import { todos } from '../type/todos'
import Input from './input'
import Message from './message'

const Todo:React.FC = () => {
   const [todo, setTodo] = useState<string>("")
   const [todosArr, setTodosArr] = useState<todos[]>([])


   const handleChecked=(id:number)=>{
   
  const checkedTodo=todos.findIndex((x)=>x.id===id)

}
const addMessage=()=>{
if(todo){
    setTodosArr([...todosArr,{text:todo,id:todosArr.length+1}])
}
setTodo(" ")
}

const deleteMessage=(id:number)=>{
setTodosArr(todosArr.filter((todo)=>todo.id!==id))
}

  return (
    <>
<Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
<Message  handleChecked={handleChecked}  deleteMessage={deleteMessage}  todosArr={todosArr} setTodosArr={setTodosArr}/>
    </>
  )
}

export default Todo
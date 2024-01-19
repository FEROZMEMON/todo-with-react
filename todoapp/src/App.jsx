import { useState } from "react"



function App(){
  let [text , setText] = useState()
  let [array , setArray] = useState([])
  function Addtodo(event){
    event.preventDefault()
    console.log(text);
    array.push(text)
    setArray(array)
    setText('')

  }

  function deleteTodo(index){
    console.log(index);
    const newarray = [...array]
    newarray.splice(index , 1)
    setArray(newarray)

  }
  function editTodo(index){
    console.log(index);
    const newvalue = prompt('enter new todo')
    const newarray = [...array]
    newarray[index] = newvalue
    setArray(newarray)

  }






  return(
  <>
  <form onSubmit={Addtodo}>
    <input type="text" placeholder="enter your todo" onChange={(e)=>setText(e.target.value)} value={text} />
    <button type="submit">Add todo</button>
  </form>
  {array.map((item , index)=>{
   return  <ul>
     <li>{item}
      <button onClick={()=> deleteTodo(index)}>delete</button>
      <button onClick={()=> editTodo(index)}>edit</button></li>
    </ul>
  })}
    
  </>  
  )

}
export default App
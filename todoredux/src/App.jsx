import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"


function App() {

  return (
    <div className="bg-gray-500 min-h-screen">
      <h1 className='text-red-500 font-bond p-5'>Redux</h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App

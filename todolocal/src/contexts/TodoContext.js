import { useContext, createContext } from "react";
// container-create-only
export const TodoContext = createContext({

    todos: [{
        id: 1,
        todo: "Todo msg",
        completed: false,
    }],
    addTodo: (todo) => {

    },
    updateTodo: (id, todo) => {

    },
    deleteTodo: (id) => {

    },
    toggleComplete: (id) => {

    }
})
// only-provider-no-values-yet
export const TodoProvider = TodoContext.Provider
// custom hook 
export const useTodo = () => {
    return useContext(TodoContext)
}
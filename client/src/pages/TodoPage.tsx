import { useNavigate, useParams } from "react-router-dom"
import { formatDayMonth, shiftDay } from "../utils/date"
import { ArrowIcon } from "../assets/icons"
import { NewTaskInput } from "../components/UI/Todo/NewTaskInput"
import { useState } from "react"
import { ToDoTask } from "../components/UI/Todo/ToDoTask"

export const TodoPage = () => {
    const {date} = useParams()
    const navigate = useNavigate()

    const [newTaskValue, setNewTaskValue] = useState("")

    const handleCreateNewTodoTask = () => {
        console.log(`NEW TODO: ${newTaskValue}`)
    }

    const todos = [
        {id: 0, title: 'Купить масло', isDone: false},
        {id: 1, title: 'Купить молоко', isDone: true},
        {id: 2, title: 'Купить хлеб', isDone: false},
        {id: 3, title: 'Купить собачку', isDone: true},
    ]

    return (
        <>
            <div className="w-full flex items-center justify-between p-4">
                <button 
                    onClick={() => navigate(`/todo/${shiftDay(`${date}`, -1)}`)}
                    className=""><ArrowIcon /></button>
                <p className="text-base font-medium">{formatDayMonth(`${date}`)}</p>
                <button 
                    onClick={() => navigate(`/todo/${shiftDay(`${date}`, +1)}`)}
                    className="scale-x-[-1]"><ArrowIcon /></button>
            </div>
            <NewTaskInput 
                value={newTaskValue}
                onChange={setNewTaskValue}
                onSubmit={handleCreateNewTodoTask}/>
            <div className="flex flex-col">
                {todos.map((todo) => (
                    <ToDoTask 
                        id={todo.id} 
                        title={todo.title} 
                        isDone={todo.isDone}                        
                    />
                ))}
            </div>
        </>
    )
}
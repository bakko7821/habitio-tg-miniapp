import { useNavigate, useParams } from "react-router-dom"
import { formatDayMonth, shiftDay } from "../utils/date"
import { ArrowIcon } from "../assets/icons"
import { NewTaskInput } from "../components/UI/Todo/NewTaskInput"
import { useState } from "react"

export const TodoPage = () => {
    const {date} = useParams()
    const navigate = useNavigate()

    const [newTaskValue, setNewTaskValue] = useState("")

    const handleCreateNewTodoTask = () => {
        console.log(`NEW TODO: ${newTaskValue}`)
    }

    return (
        <>
            <div className="w-full flex items-center justify-between p-4">
                <button 
                    onClick={() => navigate(`/todo/${shiftDay(`${date}`, -1)}`)}
                    className=""><ArrowIcon /></button>
                <p className="text-base font-medium">{formatDayMonth(`${date}`)}</p>
                <button 
                    onClick={() => navigate(`/todo/${shiftDay(`${date}`, +1)}`)}
                    className=""><ArrowIcon /></button>
            </div>
            <NewTaskInput 
                value={newTaskValue}
                onChange={setNewTaskValue}
                onSubmit={handleCreateNewTodoTask}/>
            <div className="">
                
            </div>
        </>
    )
}
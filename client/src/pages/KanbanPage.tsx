import { useState } from "react"
import { NewTaskInput } from "../components/UI/Todo/NewTaskInput"
import { KanbanCard } from "../components/UI/Kanban/KanbanCard"

export const KanbanPage = () => {

    const [newTaskValue, setNewTaskValue] = useState("")

    const handleCreateNewKanbanTask = () => {
        console.log(`NEW KANBAN TASK: ${newTaskValue}`)
    }

    return (
        <>
            <NewTaskInput 
                value={newTaskValue}
                onChange={setNewTaskValue}
                onSubmit={handleCreateNewKanbanTask}
            />
            <div className="">
                <KanbanCard />
            </div>
        </>
    )
}
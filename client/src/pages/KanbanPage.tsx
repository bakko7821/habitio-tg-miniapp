import { useState } from "react"
import { NewTaskInput } from "../components/UI/Todo/NewTaskInput"
import { KanbanCard } from "../components/UI/Kanban/KanbanCard"

export const KanbanPage = () => {

    const [newTaskValue, setNewTaskValue] = useState("")

    const handleCreateNewKanbanTask = () => {
        console.log(`NEW KANBAN TASK: ${newTaskValue}`)
    }

    const kanban = [
        {title: "Today", tasks: [
            {   id: 0, 
                title: 'создать CRUD эндпоинты для работы с Transaction', 
                isDone: false,
                tags: [
                    {id: 0, title: 'High', color: '#FF0000'},
                    {id: 1, title: 'Clown', color: '#1F099E'},
                ]
            },
            {   id: 1, 
                title: 'создать страницу TransactionPage', 
                isDone: false,
                tags: [
                    {id: 0, title: 'High', color: '#FF0000'},
                    {id: 1, title: 'Clown', color: '#1F099E'},
                ]
            },
        ]},
        {title: "In progress", tasks: [
            {   id: 2, 
                title: 'создать CRUD эндпоинты для работы с Transaction', 
                isDone: false,
                tags: [
                    {id: 0, title: 'High', color: '#FF0000'},
                    {id: 1, title: 'Clown', color: '#1F099E'},
                ]
            },
            {   id: 3, 
                title: 'создать страницу TransactionPage', 
                isDone: false,
                tags: [
                    {id: 0, title: 'High', color: '#FF0000'},
                    {id: 1, title: 'Clown', color: '#1F099E'},
                ]
            },
        ]},
        {title: "Done", tasks: [
            {   id: 4, 
                title: 'создать CRUD эндпоинты для работы с Transaction', 
                isDone: true,
                tags: [
                    {id: 0, title: 'High', color: '#FF0000'},
                    {id: 1, title: 'Clown', color: '#1F099E'},
                ]
            },
            {   id: 5, 
                title: 'создать страницу TransactionPage', 
                isDone: true,
                tags: [
                    {id: 0, title: 'High', color: '#FF0000'},
                    {id: 1, title: 'Clown', color: '#1F099E'},
                ]
            },
        ]},
    ]

    return (
        <>
            <NewTaskInput 
                value={newTaskValue}
                onChange={setNewTaskValue}
                onSubmit={handleCreateNewKanbanTask}
            />
            <div className="">
                {kanban.map((card) => (
                    <KanbanCard
                        key={card.title}
                        title={card.title}
                        tasks={card.tasks}
                    />
                ))}
            </div>
        </>
    )
}
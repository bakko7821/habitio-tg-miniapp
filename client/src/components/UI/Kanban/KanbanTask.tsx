import type { KanbanTaskProps } from "../../../utils/types/kanban"
import { Checkbox } from "../Todo/Checkbox"
import { TaskTitle } from "../Todo/TaskTitle"
import { KanbanTag } from "./KanbanTag"

export const KanbanTask = ({id, title, isDone, tags}: KanbanTaskProps) => {
    
    function handleSetIsDone(id: number) {
        console.log(`Задача с id: ${id} - завершена.`)
    }

    return (
        <div key={id} className="w-full flex items-center justify-start gap-2 px-4 py-2">
            {!isDone ? null : (
                <Checkbox 
                    isDone={isDone}
                />
            )}
            <div 
                onClick={() => handleSetIsDone(id)}
                className="w-full flex flex-col gap-1 items-start"
            >
                <TaskTitle 
                    title={title}
                    isDone={isDone}/>
                <div className="flex items-center gap-1">
                    {tags?.map((tag) => (
                        <KanbanTag 
                            key={tag.id}
                            id={tag.id}
                            title={tag.title}
                            color={tag.color}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
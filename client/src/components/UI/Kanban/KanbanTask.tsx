import type { KanbanTaskProps } from "../../../utils/types/kanban"
import { secondTextColor, textColor } from "../../../utils/types/variables"
import { Checkbox } from "../Todo/Checkbox"
import { KanbanTag } from "./KanbanTag"

export const KanbanTask = ({id, title, isDone, tags}: KanbanTaskProps) => {
    return (
        <div key={id} className="w-full flex items-center justify-start gap-2 px-4 py-2">
            {!isDone ? null : (
                <Checkbox />
            )}
            <div className="w-full flex flex-col g-1 items-start">
                <p 
                    style={
                        !isDone ? {color: textColor} : 
                        {color: secondTextColor, textDecoration: "overline"}} 
                    className="text-sm">{title}</p>
                <div className="flex items-center gap-1">
                    {tags?.map((tag) => (
                        <KanbanTag 
                            id={tag.id}
                            title={tag.title}
                            color={tag.color}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
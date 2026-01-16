import type { KanbanTaskTagsProps } from "../../../utils/types/kanban"

export const KanbanTag = ({title, color}: KanbanTaskTagsProps) => {
    return (
        <div key={title} style={{color: color}} className="w-6 h-1 rounded-full"></div>
    )
}
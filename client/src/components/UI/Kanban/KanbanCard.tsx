import { useState } from "react"
import { ArrowIcon } from "../../../assets/icons"
import type { KanbanCardProps } from "../../../utils/types/kanban"
import { secondBgColor } from "../../../utils/types/variables"
import { KanbanTask } from "./KanbanTask"


// {title, tasks}: KanbanCardProps

export const KanbanCard = () => {
    const [cardIsOpen, setCardIsOpen] = useState(false)
    
    return (
        <div className="w-full flex flex-col gap-2">
            <div style={{backgroundColor: secondBgColor}} className="w-full flex items-center justify-between p-4">
                <p className="">Today</p>
                <button 
                    onClick={() => setCardIsOpen(prev => !prev)}
                    className={!cardIsOpen ? ("rotate-[270deg]") : ("rotate-[90deg]")}
                >
                    <ArrowIcon />
                </button>
            </div>
            {!cardIsOpen ? (
                <div className="">
                    <KanbanTask />
                </div>
            ) : null}
        </div>
    )
}
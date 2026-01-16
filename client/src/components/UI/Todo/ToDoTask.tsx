import { MoreIcon } from "../../../assets/icons"
import type { TodoTaskProps } from "../../../utils/types/todo"
import { secondTextColor } from "../../../utils/types/variables"
import { Checkbox } from "./Checkbox"
import { TaskTitle } from "./TaskTitle"

export const ToDoTask = ({id, title, isDone}: TodoTaskProps) => {
    return (
        <div key={id} className="w-full flex items-center justify-between px-4 py-2">
            <div className="flex gap-2">
                <Checkbox 
                    key={id}
                    isDone={isDone}
                />
                <TaskTitle 
                    title={title}
                    isDone={isDone}
                />
            </div>
            <button className="">
                <MoreIcon 
                    width={20}
                    height={20}
                    color={secondTextColor}
                />
            </button>
        </div>
    )
}
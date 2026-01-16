import { secondTextColor, textColor } from "../../../utils/types/variables"

interface TaskTitleProps {
    title: string;
    isDone: boolean;
}

export const TaskTitle = ({title, isDone}: TaskTitleProps) => {
    return (
        <p 
            style={
                !isDone ? {color: textColor} : 
                {color: secondTextColor, textDecoration: "line-through"}} 
            className="text-sm"
        >
            {title}
        </p>
    )
}
import { TickIcon } from "../../../assets/icons";
import { bgColor, textColor } from "../../../utils/types/variables"

interface CheckboxProps {
    isDone: boolean;
}

export const Checkbox = ({isDone}: CheckboxProps) => {

    return (
        <div 
            style={!isDone ? 
                {boxShadow: `inset 0 0 0 2px ${textColor}`, backgroundColor: "transparent"} : 
                {boxShadow: `inset 0 0 0 2px ${textColor}`, backgroundColor: textColor}} 
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        >
            {!isDone ? null : (
                <TickIcon 
                    width={12}
                    height={12}
                    color={bgColor}
                />
            )}
        </div>
    )
}
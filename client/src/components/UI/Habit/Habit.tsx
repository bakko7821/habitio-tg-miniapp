import type { HabitProps } from "../../../utils/types/types.ts"
import { secondBgColor, textColor } from "../../../utils/types/variables.ts"

interface HabitComponentProps {
    habit: HabitProps;
}

export const Habit = ({habit}: HabitComponentProps) => {
    return (
        <div style={{backgroundColor: secondBgColor}} className="w-full px-4 py-2 flex items-center justfy-beween">
            <div className="flex items-center gap-2">
                <div style={{backgroundColor: habit.color}} className="w-6 h-6 rounded-sm"></div>
                <p style={{color: textColor}} className="text-base font-medium">{habit.name}</p>
            </div>
        </div>
    )
}
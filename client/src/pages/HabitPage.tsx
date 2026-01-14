import { PlusIcon } from "../assets/icons"
import { Habit } from "../components/UI/Habit"
import type { HabitProps } from "../utils/types/types"
import { secondTextColor } from "../utils/types/variables"

const HabitsList: HabitProps[] = [
    {name: 'Отжимания', color: '#FF0000', type: 'boolean'},
    {name: 'Книги', color: '#0C763C', type: 'boolean'},
    {name: 'Программирование', color: '#0900FF', type: 'boolean'},
]

export const HabitPage = () => {
    console.log(HabitsList)
    return (
        <>
            <div className="w-full px-4 py-1">
                <PlusIcon width={24} height={24} color={secondTextColor}/>
            </div>
            <div className="flex flex-col gap-1">
                {HabitsList.map((habit) => (
                    <Habit habit={habit} />
                ))}
            </div>
        </>
    )
}
import { secondaryBgColor } from "../types/variables"
import type { Habit } from "../types/types"
import { ArrowIcon } from "../assets/icons"
import { useState } from "react"

export const HabitPage = () => {
    // const [habits] = useState<Habit[] | null>([])

    const habits: Habit[] = [
        {
            id: 1,
            name: 'Отжимания',
            icon: {
                id: 1,
                url: 'https://www.svgrepo.com/show/61821/gym-weight.svg',
                color: '#EF4444',
            },
        },
        {
            id: 2,
            name: 'Чтение',
            icon: {
                id: 2,
                url: 'https://www.svgrepo.com/show/528058/book-bookmark-minimalistic.svg',
                color: '#F97316',
            },
        },
        {
            id: 3,
            name: 'Программирование',
            icon: {
                id: 3,
                url: 'https://www.svgrepo.com/show/525969/laptop-minimalistic.svg',
                color: '#EAB308',
            },
        },
    ]

    {habits?.forEach((habit) => {
        console.log(habit)
    })}

    const linkClass =
        "relative p-2 rounded-full transition-colors duration-300";

    const [activeHabitId, setActiveHabitId] = useState<number | null>(null);

    const getArrowButtonClass = (isActive: boolean) =>
        `${linkClass} ${isActive ? "arrow-button-active" : "arrow-button"}`;

    return(
        <div className="flex flex-col gap-2">
            {habits.map((habit) => (
                <div
                    key={habit.id}
                    style={{ backgroundColor: secondaryBgColor }}
                    className="w-full rounded-2xl p-2"
                >
                    <div className="w-full flex justify-between">
                        <div className="flex justify-start items-center gap-3">
                            <div
                                style={{ backgroundColor: `${habit.icon.color}4D` }}
                                className="p-2 rounded-lg flex items-center justify-center"
                            >
                                <img 
                                    src={habit.icon.url} 
                                    alt="Icon" 
                                    className="w-[28px] h-[28px]"
                                />
                            </div>

                            <p className="font-sf text-xl font-medium leading-[1.3]">{habit.name}</p>
                        </div>
                        <button
                            onClick={() => setActiveHabitId(habit.id)}
                            className={getArrowButtonClass(activeHabitId === habit.id)}
                        >
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
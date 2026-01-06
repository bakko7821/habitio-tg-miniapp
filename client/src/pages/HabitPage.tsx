import { disableColor, secondaryBgColor, textColor } from "../types/variables"
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
            weeks: [
                {
                    name: 'monday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: true,
                        },
                        {
                            date: '',
                            status: true,
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Чтение',
            icon: {
                id: 2,
                url: 'https://www.svgrepo.com/show/528058/book-bookmark-minimalistic.svg',
                color: '#F97316',
            },
            weeks: [
                {
                    name: 'monday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: true,
                        },
                        {
                            date: '',
                            status: true,
                        },
                    ]
                }
            ]
        },
        {
            id: 3,
            name: 'Программирование',
            icon: {
                id: 3,
                url: 'https://www.svgrepo.com/show/525969/laptop-minimalistic.svg',
                color: '#EAB308',
            },
            weeks: [
                {
                    name: 'monday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: true,
                        },
                        {
                            date: '',
                            status: true,
                        },
                    ]
                },
                {
                    name: 'tuesday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: false,
                        },
                        {
                            date: '',
                            status: true,
                        },
                        {
                            date: '',
                            status: true,
                        },
                    ]
                },
                {
                    name: 'wednesday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                    ]
                },
                {
                    name: 'thursday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                    ]
                },
                {
                    name: 'friday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                    ]
                },
                {
                    name: 'saturday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                    ]
                },
                {
                    name: 'sunday',
                    days: [
                        {
                            date: '',
                            status: false,
                        },
                    ]
                },
            ]
        },
    ]

    const toShortDay = (day: string) => day.slice(0, 3);

    const linkClass =
        "relative p-2 rounded-full transition-colors duration-300";

    const [activeHabitId, setActiveHabitId] = useState<number | null>(null);

    const getArrowButtonClass = (isActive: boolean) =>
        `${linkClass} ${isActive ? "arrow-button-active" : "arrow-button"}`;

    const openHabitContent = (id: number) => {
        setActiveHabitId(id)

    }

    return(
        <div className="flex flex-col gap-2">
            {habits.map((habit) => (
                <div
                    key={habit.id}
                    style={{ backgroundColor: secondaryBgColor }}
                    className="w-full rounded-2xl p-2 flex flex-col gap-2"
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
                            onClick={() => openHabitContent(habit.id)}
                            className={getArrowButtonClass(activeHabitId === habit.id)}
                        >
                            <ArrowIcon />
                        </button>
                    </div>
                    <div className={activeHabitId === habit.id ? "flex flex gap-2" : "hidden"}>
                        <div className="w-full flex flex-col gap-1">
                            {habit.weeks.map((week) => (
                                <div 
                                    key={week.name}
                                    className="flex items-center justify-start gap-2"
                                >
                                    <p 
                                        style={{ color: textColor, opacity: 0.6}}
                                        className="w-[30px] font-sf text-xs font-regular leading-[1.5] uppercase"
                                    >
                                        {toShortDay(week.name)}
                                    </p>
                                    <div className="flex gap-1">
                                        {week.days.map((day) => (
                                            <div 
                                                key={day.date}
                                                style={{ backgroundColor: !day.status ? habit.icon.color : disableColor }}
                                                className="w-[18px] h-[18px] rounded-md">

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
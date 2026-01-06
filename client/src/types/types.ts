export interface HeaderProps {
    title: string;
}

// Habit interfaces

export interface Habit {
    id: number;
    name: string;
    icon: HabitIcon;
    weeks: HabitWeek[];
}

export interface HabitIcon {
    id: number;
    url: string;
    color: string;
}

export interface HabitWeek {
    name: string;
    days: HabitDay[]
}

export interface HabitDay {
    date: string;
    status: boolean;
    value?: number;
}
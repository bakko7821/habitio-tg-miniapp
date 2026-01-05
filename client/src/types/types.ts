export interface HeaderProps {
    title: string;
}

export interface Habit {
    id: number;
    name: string;
    icon: HabitIcon;
}

export interface HabitIcon {
    id: number;
    url: string;
    color: string;
}
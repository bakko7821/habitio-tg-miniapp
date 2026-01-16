export interface KanbanCardProps {
    title: string;
    tasks: KanbanTaskProps[]
}

export interface KanbanTaskProps {
    id: number;
    title: string;
    description?: string;
    isDone: boolean;
    tags?: KanbanTaskTagsProps[];
}

export interface KanbanTaskTagsProps {
    id: number;
    title: string;
    color: string;
}
export interface HabitDB {
  id: number
  name: string
}

export interface HabitIconDB {
  id: number
  habit_id: number
  url: string
  color: string
}

export interface HabitLogDB {
  id: number
  habit_id: number
  date: string // YYYY-MM-DD
  status: boolean
  value?: number | null
}

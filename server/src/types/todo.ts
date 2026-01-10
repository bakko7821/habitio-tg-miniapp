export interface Todo {
  id: number
  name: string
  checked: boolean
}

export interface TodoByDate {
  date: string // ISO
  tasks: Todo[]
}

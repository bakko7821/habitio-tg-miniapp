import { useEffect, useState } from "react"
import { AddIcon, ArrowIcon } from "../assets/icons"
import { buttonColor, buttonTextColor } from "../types/variables"
import { Checkbox } from "../components/UI/Checkbox"
import type { TodoTask } from "../types/types"
import { addTodo, getTodayTodos } from "../api/todo.api"

export const TodoPage = () => {
  const USER_ID = 1 // временно, потом из auth
  const [tasks, setTasks] = useState<TodoTask[]>([])
  const [newTask, setNewTask] = useState("")

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodayTodos(USER_ID)

        if (data.length > 0) {
          setTasks(data[0].tasks)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchTodos()
  }, [])

  const handleAddTodo = async () => {
    if (!newTask.trim()) return

    try {
      const created = await addTodo(USER_ID, newTask)

      setTasks(prev => [
        ...prev,
        {
          id: created.id,
          name: created.name,
          checked: created.checked,
        },
      ])

      setNewTask("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col gap-3 relative p-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="rotate-[90deg]">
          <ArrowIcon />
        </button>
        <span className="text-2xl font-bold">10 January</span>
        <button className="rotate-[-90deg]">
          <ArrowIcon />
        </button>
      </div>

      <div style={{ backgroundColor: buttonColor }} className="plug"></div>

      {/* Add todo */}
      <div className="flex items-center justify-center gap-2">
        <input
          className="w-full text-center p-2 text-base"
          type="text"
          placeholder="Новая задача"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        />
        <button
          onClick={handleAddTodo}
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          className="addToDoButton p-1 rounded-xl"
        >
          <AddIcon />
        </button>
      </div>

      <div style={{ backgroundColor: buttonColor }} className="plug"></div>

      {/* Todos */}
      {tasks.length === 0 ? (
        <p>У вас отсутствуют задачи на сегодня</p>
      ) : (
        <div className="flex flex-col w-full gap-2">
          {tasks.map(task => (
            <Checkbox
              key={task.id}
              task={task}
              checked={task.checked}
              onChange={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  )
}

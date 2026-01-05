// layout/Layout.tsx
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { bgColor, textColor } from "../types/variables"

const titlesMap: Record<string, string> = {
  "/habit": "Habit Track",
  "/todo": "To-do Track",
  "/pomodoro": "Pomodoro",
  "/chart": "Chart",
  "/profile": "Profile",
}

export const Layout = () => {
  const location = useLocation()
  const title = titlesMap[location.pathname] ?? ""

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh' }} 
        className="p-4 gap-4 flex flex-col items-center justify-between">
      <Header title={title} />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Navigation />
    </div>
  )
}

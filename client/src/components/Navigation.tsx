import { NavLink } from "react-router-dom"
import {
  ChartIcon,
  HabitIcon,
  NoteIcon,
  PomodoroIcon,
  ProfileIcon,
} from "../assets/icons"
import { accentTextColor, hintColor, secondaryBgColor } from "../types/variables"

const linkClass = "p-2 transition"

const getStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? accentTextColor : hintColor,
})

export const Navigation = () => {
  return (
    <nav
      style={{ backgroundColor: secondaryBgColor }}
      className="w-full rounded-2xl flex justify-between px-3 py-2"
    >
      <NavLink to="/habit" style={getStyle} className={linkClass}>
        <HabitIcon />
      </NavLink>

      <NavLink to="/todo" style={getStyle} className={linkClass}>
        <NoteIcon />
      </NavLink>

      <NavLink to="/pomodoro" style={getStyle} className={linkClass}>
        <PomodoroIcon />
      </NavLink>

      <NavLink to="/chart" style={getStyle} className={linkClass}>
        <ChartIcon />
      </NavLink>

      <NavLink to="/profile" style={getStyle} className={linkClass}>
        <ProfileIcon />
      </NavLink>
    </nav>
  )
}

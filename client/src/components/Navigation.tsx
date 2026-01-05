import { NavLink } from "react-router-dom"
import {
  ChartIcon,
  HabitIcon,
  NoteIcon,
  PomodoroIcon,
  ProfileIcon,
} from "../assets/icons"
import { accentTextColor, hintColor, secondaryBgColor} from "../types/variables"
import { useTelegram } from "../hooks/useTelegram"

const linkClass = "p-2 transition"

const getStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? accentTextColor : hintColor,
})

export const Navigation = () => {
    const { user } = useTelegram()

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
            {user?.photo_url ? (
                <img
                    src='client/src/assets/17de3c6552c97658bb05e6292e5cc674.jpg'
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
            ) : (<ProfileIcon />)}
            </NavLink>
        </nav>
    )
}

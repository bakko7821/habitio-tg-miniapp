import { NavLink } from "react-router-dom"
import {
  ChartIcon,
  HabitIcon,
  NoteIcon,
  PomodoroIcon,
  ProfileIcon,
} from "../assets/icons"
import { secondaryBgColor} from "../types/variables"

const linkClass =
  "relative p-2 rounded-full transition-colors duration-300";

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkClass} ${isActive ? "nav-link-active" : "nav-link"}`;


export const Navigation = () => {
    return (
        <nav
            style={{ backgroundColor: secondaryBgColor }}
            className="w-full rounded-2xl flex items-end justify-between px-3 py-2"
        >
            <NavLink to="/habit" className={getLinkClass}>
                <HabitIcon />
            </NavLink>
            <NavLink to="/todo" className={getLinkClass}>
                <NoteIcon />
            </NavLink>

            <NavLink to="/pomodoro" className={getLinkClass}>
                <PomodoroIcon />
            </NavLink>

            <NavLink to="/chart" className={getLinkClass}>
                <ChartIcon />
            </NavLink>

            <NavLink to="/profile" className={getLinkClass}>
                <ProfileIcon />
            </NavLink>
        </nav>
    )
}

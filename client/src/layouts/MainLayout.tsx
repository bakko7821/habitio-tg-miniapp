import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
// import useAuthGuard from "../hooks/useAuthGuard";

const pathname = location.pathname

const titleMap: Array<{ match: RegExp; title: string }> = [
  { match: /^\/habit$/, title: "Habits" },
  { match: /^\/todo(\/.*)?$/, title: "Todo" },
  { match: /^\/kanban$/, title: "Kanban" },
  { match: /^\/pomodoro$/, title: "Pomodoro" },
  { match: /^\/chart$/, title: "Chart" },
  { match: /^\/profile$/, title: "Profile" },
]

const title =
  titleMap.find(item => item.match.test(pathname))?.title ?? ""

export default function MainLayout() {
    // useAuthGuard()
    
    return (
        <>
            <Header title={title}/>
            <main className="h-full w-full flex flex-col gap-2">
                <Outlet />
            </main>
        </>
    )
}
// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HabitPage } from "../pages/HabitPage"
import { ProfilePage } from "../pages/ProfilePage"
import { TodoPage } from "../pages/TodoPage"
import { PomodoroPage } from "../pages/PomodoroPage"
import { ChartPage } from "../pages/ChartPage"
import { Layout } from "../layout/Layout"
import { useEffect } from "react"
import { telegramAuth } from "../api/telegramAuth"

function App() {
  
  useEffect(() => {
    telegramAuth()
      .then((user) => {
        console.log('Authorized user:', user);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/habit" />} />
          <Route path="/habit" element={<HabitPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

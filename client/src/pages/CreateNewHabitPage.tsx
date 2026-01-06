import { useState } from "react"

export const CreateNewHabitPage = () => {
    const [habitName, setHabitName] = useState('')
    const [habitColor, setHabitColor] = useState('')
    const [habitTime, setHabitTime] = useState('')
    const [habitNotes, setHabitNotes] = useState('')

    return (
        <form 
            action=""
            className="flex flex-col gap-3 relative"
        >
            <div className="flex gap-3">
                <div className="floating-input w-full">
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Название"
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}/>
                    <label htmlFor="name">Название</label>
                </div>
                <div className="floating-input">
                    <input 
                        type="color" 
                        name="color" 
                        id="color"
                        placeholder="Цвет"
                        value={habitColor}
                        onChange={(e) => setHabitColor(e.target.value)}/>
                    <label htmlFor="color">Цвет</label>
                </div>
            </div>
            <div className="floating-input">
                <select id="habit-type">
                    <option value="everyday">Каждый день</option>
                    <option value="one-three-day">Раз в 3 дня</option>
                    <option value="one-on-week">Раз в неделю</option>
                </select>
                <label htmlFor="habit-type">Частота</label>
            </div>
            <div className="floating-input w-full">
                <input 
                    type="time" 
                    name="time" 
                    id="time"
                    placeholder="Напоминание"
                    value={habitTime}
                    onChange={(e) => setHabitTime(e.target.value)}/>
                <label htmlFor="time">Напоминание</label>
            </div>
            <div className="floating-input w-full">
                <input 
                    type="text" 
                    name="notes" 
                    id="notes"
                    placeholder="Заметки"
                    value={habitNotes}
                    onChange={(e) => setHabitNotes(e.target.value)}/>
                <label htmlFor="notes">Заметки</label>
            </div>
        </form>
    )
}
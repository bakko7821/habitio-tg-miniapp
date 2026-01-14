import { useNavigate, useParams } from "react-router-dom"
import { formatDayMonth, shiftDay } from "../utils/date"
import { ArrowIcon, CrossIcon, PlusIcon } from "../assets/icons"
import { secondBgColor, secondTextColor } from "../utils/types/variables"
import { useState } from "react"

export const TodoPage = () => {
    const {date} = useParams()
    const navigate = useNavigate()

    const [isInputActive, setIsInputActive] = useState(false)
    const [todoValue, setTodoValue] = useState('')

    return (
        <>
            <div className="w-full flex items-center justify-between p-4">
                <button 
                    onClick={() => navigate(`/todo/${shiftDay(`${date}`, -1)}`)}
                    className=""><ArrowIcon /></button>
                <p className="text-base font-medium">{formatDayMonth(`${date}`)}</p>
                <button 
                    onClick={() => navigate(`/todo/${shiftDay(`${date}`, +1)}`)}
                    className="transform scale-x-[-1]"><ArrowIcon /></button>
            </div>
            <div style={{backgroundColor: secondBgColor}} className="w-full flex items-center justify-start p-4">
                {!isInputActive ? (
                    <div 
                        onClick={() => setIsInputActive(true)}
                        className="flex gap-2"
                    >
                        <PlusIcon color={secondTextColor} />
                        <p style={{ color: secondTextColor }} className="text-base font-medium">Новая задача</p>
                    </div>
                ) : (
                    <div className="w-full flex items-center justify-between">
                        <input 
                            type="text" 
                            value={todoValue}
                            onChange={(e) => setTodoValue(e.target.value)}
                            placeholder="Купить хлеб"
                        />
                        <div className="flex items-center justify-center gap-2">
                            <button 
                                onClick={() => console.log(todoValue)}
                                className=""
                            >
                                <PlusIcon color={secondTextColor} />
                            </button>
                            <button 
                                onClick={() => setIsInputActive(false)}
                                className=""
                            >
                                <CrossIcon color={secondTextColor} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
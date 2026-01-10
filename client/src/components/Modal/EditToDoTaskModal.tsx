import { CrossIcon } from "../../assets/icons"
import type { EditToDoTaskModalProps } from "../../types/types"
import { buttonColor, buttonTextColor, textColor } from "../../types/variables"

export const EditToDoTaskModal = ({task, onClose}: EditToDoTaskModalProps ) => {
    return (
        <div className="modal fixed inset-0 z-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" />
                <div
                    className="pickIconContent relative overflow-y-scroll z-10 w-[85vw] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/50 shadow-xl p-3 gap-4 flex flex-col"
                >
                    <div className="w-full flex items-center justify-between">
                        <p style={{ color: textColor }}
                            className="text-base font-medium"
                        >
                            {task.name}
                        </p>
                        <button 
                            style={{ color: textColor }}
                            type="button"
                            className="close p-1"
                            onClick={onClose}
                        >
                            <CrossIcon />
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                       
                    </div>

                    <button 
                            style={{ backgroundColor: buttonColor, color: buttonTextColor}}
                            className="text-base font-medium leading-[1.5] w-full rounded-xl p-3"
                        >Сохранить</button>
                </div>
        </div>
    )
}
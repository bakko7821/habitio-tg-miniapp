import { CrossIcon } from "../../assets/icons";
import type { EditHabitModalProps } from "../../types/types";
import { textColor } from "../../types/variables";

export const EditHabitModal = ({habit, onClose}: EditHabitModalProps) => {
    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" />
                <div
                    className="pickIconContent relative overflow-y-scroll z-10 w-[85vw] h-[60vh] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/50 shadow-xl p-3 gap-3 flex flex-col"
                >
                    <div className="w-full flex items-center justify-between">
                        <p style={{ color: textColor }}
                            className="text-base font-medium"
                        >
                            {habit.name}
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
                </div>
        </div>
    )
}
import type { ChangeDaySuccesModalProps } from "../../types/types"

export const ChangeDaySuccesModal = ({day, onClose}: ChangeDaySuccesModalProps) => {
    return (
        <div className="modal fixed inset-0 z-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" onClick={onClose}/>
                <div
                    className="pickIconContent relative overflow-y-scroll z-10 w-[85vw] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/50 shadow-xl p-3 gap-4 flex flex-col"
                >
                    <p>{day.date}</p>
                </div>
        </div>
    )
}
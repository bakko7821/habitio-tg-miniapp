import { CrossIcon } from "../../assets/icons"
import type { IconsModalProps } from "../../types/types"
import { hintColor, textColor } from "../../types/variables"
import { iconsList } from "../../utils/icons.links"

export const IconsModal = ({ onSelect, onClose }: IconsModalProps) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" onClick={onClose}/>
            <div
                className="pickIconContent relative overflow-y-scroll z-10 w-[85vw] h-[60vh] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/50 shadow-xl p-3 gap-3 flex flex-col"
            >
                <div className="w-full flex items-center justify-between">
                    <p style={{ color: textColor }}
                        className="text-base font-medium"
                    >
                        Иконки
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
                    {iconsList.map((category) => (
                        <div className="w-full flex flex-col gap-2">
                            <p style={{ color: hintColor }}
                                className="text-sm font-medium text-start">{category.name}</p>
                            <div className="">
                                {category.icons.map((icon) => (
                                    <button 
                                        key={icon.id}
                                        type="button"
                                        onClick={() => onSelect(icon.url)}
                                        style={{ color: textColor }}
                                        className="p-2"
                                    >
                                        <img className="icon" src={icon.url} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

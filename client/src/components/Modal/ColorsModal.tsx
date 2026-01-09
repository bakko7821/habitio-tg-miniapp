import { useState } from "react";
import { ChromePicker, type ColorResult } from "react-color";
import { CrossIcon } from "../../assets/icons";
import type { ColorsModalProps } from "../../types/types";
import { buttonColor, buttonTextColor, textColor } from "../../types/variables";

export const ColorsModal = ({ onSelect, onClose }: ColorsModalProps) => {
    const [color, setColor] = useState<string>("#22C55E"); // стартовый цвет

    const handleChange = (color: ColorResult) => {
        setColor(color.hex);
    };

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
            {/* backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-white/10 backdrop-blur-xs"
            />

            {/* modal */}
            <div
                className="pickColorContent relative z-10 w-[85vw] max-w-sm
                rounded-2xl bg-white/10 backdrop-blur-xl
                border border-white/50 shadow-xl p-3
                gap-3 flex flex-col"
            >
                {/* header */}
                <div className="w-full flex items-center justify-between">
                    <p
                        style={{ color: textColor }}
                        className="text-base font-medium"
                    >
                        Выбор цвета
                    </p>
                    <button
                        style={{ color: textColor }}
                        onClick={onClose}
                        type="button"
                        className="close p-1"
                    >
                        <CrossIcon />
                    </button>
                </div>

                {/* content */}
                <div className="flex flex-col gap-4 w-full items-center">
                    <ChromePicker
                        color={color}
                        onChange={handleChange}
                        disableAlpha
                        styles={{
                            default: {
                                picker: {
                                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
                                    width: '100%',
                                    borderRadius: "16px",
                                },
                                saturation: {
                                    borderRadius: "12px",
                                },
                                hue: {
                                    borderRadius: "12px",
                                },
                                color: {
                                    borderRadius: "8px",
                                },
                                input: {
                                    color: "#fff",
                                    borderRadius: "8px",
                                },
                                swatch: {
                                    borderRadius: "10px",
                                },
                            },
                        }}
                    />
                    <button
                        style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                        onClick={() => {
                            onSelect(color);
                            onClose();
                        }}
                        className="w-full text-base font-medium p-3 rounded-xl"
                    >
                        Сохранить
                    </button>

                </div>
            </div>
        </div>
    );
};

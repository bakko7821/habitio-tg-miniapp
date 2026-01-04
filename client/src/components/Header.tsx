import type { HeaderProps } from "../types/types"
import { textColor } from "../types/variables"

export const Header = ({title}: HeaderProps) => {
    return (
        <header className="w-full px-3 py-2">
            <h1 style={{ color: textColor }}
                className="font-sf text-2xl font-bold uppercase leading-[1.2]">{title}</h1>
        </header>
    )
}
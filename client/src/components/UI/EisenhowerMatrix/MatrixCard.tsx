import type { MatrixCardProps } from "../../../utils/types/matrix"
import { MatrixElement } from "./MatrixElement"

export const MatrixCard = ({title, description, color, elements}: MatrixCardProps) => {
    return (
        <div 
            style={{ backgroundColor: color }} 
            className="w-full relative flex flex-col"
        >
            <div
                className="absolute flex flex-col items-end justify-center gap-0 bottom-2 right-2"
            >
                <p className="text-xl font-medium uppercase">{title}</p>
                <p className="text-sm font-light italic">{description}</p>
            </div>
            <div className="p-2 flex flex-wrap gap-2 justify-start items-start">
                {elements.map((element) => (
                    <MatrixElement 
                        id={element.id}
                        title={element.title}
                    />
                ))}
            </div>
        </div>
    )
}
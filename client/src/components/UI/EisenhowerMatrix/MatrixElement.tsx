import type { MatrixCardElementProps } from "../../../utils/types/matrix";

export const MatrixElement = ({id, title}: MatrixCardElementProps) => {
    return (
        <p key={id} className="text-sm">{title}</p>
    )
}
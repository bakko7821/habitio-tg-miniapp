interface IconsProps {
    width?: number;
    height?: number;
    color?: string;
}

export const BurgerMenuIcon = ({width = 24, height = 24, color = '#1a1a1a',}: IconsProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
    )
}

export const PlusIcon = ({width = 24, height = 24, color = '#1a1a1a',}: IconsProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}

export const ArrowIcon = ({width = 24, height = 24, color = '#1a1a1a'}: IconsProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill={color}></path> </g></svg>
    )
}

export const CrossIcon = ({width = 24, height = 24, color = '#1a1a1a'}: IconsProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}

export const MoreIcon = ({width = 24, height = 24, color = '#9c9c9c'}: IconsProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill={color}></circle> 
                <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill={color}></circle> 
                <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill={color}></circle> 
            </g></svg>
    )
}

export const TickIcon = ({width = 24, height = 24, color = '#1a1a1a'}: IconsProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}
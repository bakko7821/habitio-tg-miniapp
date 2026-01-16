import { RotatePhoneIcon } from "../../assets/icons"

export const RotatePhoneModal = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <RotatePhoneIcon 
                width={200}
                height={200}
            />
            <p className="px-7 text-xl text-center font-bold">Для комфортной работы, необходимо переместить телефон в горизонтальное положение.</p>
        </div>
    )
}
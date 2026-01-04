import { useTelegram } from "../hooks/useTelegram"

export const ProfilePage = () => {
    const { user } = useTelegram()

    return(
        <>
            <p>{user?.first_name || 'Unknow'}</p>
            <p>{user?.last_name || 'Unknow'}</p>
            <p>@{user?.username || 'Unknow'}</p>
        </>
    )
}
import { useState } from "react"
import { Link } from "react-router-dom"
import { bgColor, secondBgColor, textColor } from "../../utils/types/variables"

export const RegisterForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        alert(`Send Login Form: ${login}:${password}`)
    }

    return (
        <form onSubmit={handleRegister} className="flex flex-col items-center jusify-center gap-10">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                    <div style={{backgroundColor: secondBgColor}} className="floating-input">
                        <input 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            type="text" 
                            name="login"
                            id="login"
                            placeholder="login"/>
                        <label htmlFor="login">Login</label>
                    </div>
                    <div style={{backgroundColor: secondBgColor}} className="floating-input">
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" 
                            name="password"
                            id="password"
                            placeholder="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                    <Link className="px-2 text-sm" to={"/auth/login"}>Войти</Link>
                    <Link className="px-2 text-sm" to={"/auth/recovery"}>Забыли пароль?</Link>
                </div>
            </div>
            <button 
                style={{backgroundColor: textColor, color: bgColor}} 
                className="text-xl font-medium w-full p-2" 
                type="submit"
            >
                Создать аккаунт
            </button>
        </form>
    )
}
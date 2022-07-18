import { useEffect, useState } from "react"
import AdminPanel from "../components/AdminPanel/Index"
import UserService from "../services/UserService"
import Btn from "../UI/Btn/Index"
import Input from "../UI/Input/Index"

const AdminPage = () => {

    const [auth, setAuth] = useState<boolean>(false)
    const [admin_psw, setAdminPsw] = useState<string | null>(null)

    useEffect(() => {
        let admin_psw = localStorage.getItem('admin_psw')

        if(admin_psw) checkAuth(admin_psw)
    }, [auth])

    const checkAuth = async (password: string) => {
        const validationResult = await UserService.check(password)

        if(!validationResult) {
            localStorage.removeItem('admin_psw')
            return setAuth(false)
        }

        localStorage.setItem('admin_psw', password)
        setAuth(true)
        setAdminPsw(password)
    }

    if(auth === false) return (
        <div className="comparison_container">
            <div className="admin_panel">
                <div className="admin_panel-header">
                    <h1>Войдите в админ-панель</h1>
                </div>
                <div className="admin_panel-action">
                    <Input type="password" default placeholder="Введите пароль" onChange={e => setAdminPsw(e.target.value)}/>
                    <Btn onClick={() => checkAuth(admin_psw!)} disabled={admin_psw ? false : true}>Войти</Btn>
                </div>
            </div>
        </div>
    )
        
    return (
        <AdminPanel admin_psw={admin_psw!}/>
    )
}

export default AdminPage
import { Navigate, Route, Routes} from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'

export function useRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
    )
}

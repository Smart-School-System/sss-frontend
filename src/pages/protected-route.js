import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem('token'))

    useEffect(() => {
        setAuth(localStorage.getItem('token'))
        !auth && toast.error("Access denied, please login first.")
    }, [auth])
    return auth ? children : <>
        <Navigate to="/" />
    </>;
}
export default ProtectedRoute
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';

const ProtectedRoute = ({ children }) => {
    const [authorized, setAuthorized] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) setAuthorized(true)
        else {
            navigate('/')
            message.error('Access denied, please login.')
        }
    }, [navigate])
    return (authorized && children)
}
export default ProtectedRoute
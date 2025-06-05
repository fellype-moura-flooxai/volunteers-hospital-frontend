import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuthRedirect(tipoEsperado) {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const tipo = localStorage.getItem('tipoUsuario')

        if (!token || (tipoEsperado && tipo !== tipoEsperado)) {
            navigate('/login', { replace: true })
        }
    }, [navigate, tipoEsperado])
}
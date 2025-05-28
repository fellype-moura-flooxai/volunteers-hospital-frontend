import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuthRedirect(tipoEsperado) {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const tipo = localStorage.getItem('tipo_usuario')

        // Se não tiver token ou tipo incompatível
        if (!token || (tipoEsperado && tipo !== tipoEsperado)) {
            navigate('/login')
        }
    }, [navigate, tipoEsperado])
}
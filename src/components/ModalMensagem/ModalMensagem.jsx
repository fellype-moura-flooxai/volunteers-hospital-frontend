import './ModalMensagem.css'

export default function ModalMensagem({ mensagem }) {
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <span className="modal-icon">ℹ️</span>
                <p>{mensagem}</p>
                <span className="modal-info">Redirecionando para o login...</span>
            </div>
        </div>
    )
}

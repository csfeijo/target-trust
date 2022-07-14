const Modal = (props) => {
  const { nome, sigla, onConfirm } = props
  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">CONFIRMAÇÃO DE EXCLUSÃO?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <p>Departamento: {nome}</p>
            <p>Sigla: {sigla}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button 
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onConfirm()
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
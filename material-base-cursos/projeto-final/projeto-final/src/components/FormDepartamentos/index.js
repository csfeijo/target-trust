

const salvarDepto = () => {
  alert(0)
}

const FormDepartamentos = () => {

  return (
    <>
      <h3 className='mt-4 mb-4'>Cadastro de Departamento</h3>
      <div className='row'>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input type='text' className='form-control' id='nome' placeholder='Nome'/>
            <label htmlFor='nome'>Nome</label>
          </div>
        </div>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input type='text' className='form-control' id='sigla' placeholder='Sigla'/>
            <label htmlFor='sigla'>Sigla</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button 
            className='btn btn-primary'
            onClick={salvarDepto}
          >
            <i className='bi bi-save'/> Salvar
          </button>
        </div>
      </div>
    </>
  )
}

export default FormDepartamentos
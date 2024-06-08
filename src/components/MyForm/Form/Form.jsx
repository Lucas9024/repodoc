import React from 'react';


const Form = () => {
  return (
    <div className='form-container'>
        <form className='form'>
            <div className="form-group">
                <label htmlFor="fullname">Nome completo</label>
                <input 
                id="fullname" 
                name='fullname' 
                type='text' 
                className='form-control'
                />
            </div>

            <div className="form-group">
                <label htmlFor="username">Nome de Usuário</label>
                <input 
                id="username" 
                name='username' 
                type='text' 
                className='form-control'
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Nome de Usuário</label>
                <input 
                id="username" 
                name='username' 
                type='text' 
                className='form-control'
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                id="email" 
                name='email' 
                type='text' 
                className='form-control'
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input 
                id="password" 
                name='password' 
                type='password' 
                className='form-control'
                />
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input 
                id="confirmPassword" 
                name='confirmPassword' 
                type='password' 
                className='form-control'
                />
            </div>

            <div className='form-group checkbox-group'>
                <input 
                type="checkbox" 
                id='acceptTerms'
                name='acceptTerms'
                className='form-checkbox'
                />
                <label htmlFor="acceptTerms">

                    Eu li e aceito os termos

                </label>

            </div>

            <div className='form-group button-group'>

                <button type='submit' className='submit-button'>
                    
                    Registrar
                    
                    </button>

                <button type='reset' className='reset-button'>

                    Registrar
                    
                    </button>

            </div>

        </form>
      
    </div>
  )
}

export default Form

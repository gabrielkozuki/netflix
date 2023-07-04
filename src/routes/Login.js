
import './Login.scss'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigateTo = useNavigate()

    function entrar() {
        navigateTo('/')
    }

    return (
        <div className="login">
            <div className="form">
                <div className="title">Login</div>
                <div className="subtitle">Faça login com suas credenciais ou <u onClick={() => navigateTo('/cadastro')}>CADASTRE-SE</u></div>

                <div className="input-container ic1">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label htmlFor="email" className="placeholder">E-mail</label>
                </div>
                <div className="input-container ic2">
                    <input id="senha" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="senha" className="placeholder">Senha</label>
                </div>
                <button type="text" className="submit" onClick={() => { entrar() }}>Entrar</button>
            </div>
        </div>
  )
}

export default Login

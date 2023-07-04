
import './Login.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fazerLogin } from '../api'

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigateTo = useNavigate()

    async function entrar() {
        let user = {
            'email': email,
            'senha': senha
        }

        let res = await fazerLogin(user)

        if (!res.codigo) {
            navigateTo('/', {state: {sessionID: res.sessionID}})
        } else {
            alert('Erro ao fazer login')
        }
    }

    return (
        <div className="login">
            <div className="form">
                <div className="title">Login</div>
                <div className="subtitle">Faça login com suas credenciais ou <u onClick={() => navigateTo('/cadastro')}>CADASTRE-SE</u></div>

                <div className="input-container ic1">
                    <input id="email" value={email} onChange={event => setEmail(event.target.value)} className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label htmlFor="email" className="placeholder">E-mail</label>
                </div>
                <div className="input-container ic2">
                    <input id="senha" value={senha} onChange={event => setSenha(event.target.value)} className="input" type="password" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="senha" className="placeholder">Senha</label>
                </div>
                <button type="text" className="submit" onClick={() => { entrar() }}>Entrar</button>
            </div>
        </div>
  )
}

export default Login

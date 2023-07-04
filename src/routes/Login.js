
import './Login.scss'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigateTo = useNavigate()

    return (
        <div className="login">
            <div class="form">
                <div class="title">Login</div>
                <div class="subtitle">Faça login com suas credenciais ou <u onClick={() => navigateTo('/cadastro')}>CADASTRE-SE</u></div>

                <div class="input-container ic1">
                    <input id="email" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="email" class="placeholder">E-mail</label>
                </div>
                <div class="input-container ic2">
                    <input id="senha" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="senha" class="placeholder">Senha</label>
                </div>
                <button type="text" class="submit">Entrar</button>
            </div>
        </div>
  )
}

export default Login


import './Cadastro.scss'
import { useNavigate } from 'react-router-dom';

function Cadastro() {

    const navigateTo = useNavigate()

    function cadastrar() {
        navigateTo('/login')
    }

    return (
        <div className="cadastro">
            <div className="form">
                <div className="title">Cadastro</div>
                <div className="subtitle">Insira suas credenciais abaixo:</div>

                <div className="input-container ic1">
                    <input id="nome" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="nome" className="placeholder">Nome</label>
                </div>
                <div className="input-container ic2">
                    <input id="idade" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="idade" className="placeholder">Idade</label>
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">E-mail</label>
                </div>
                <div className="input-container ic2">
                    <input id="senha" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label htmlFor="senha" class="placeholder">Senha</label>
                </div>
                <div class="input-container ic2">
                    <input id="confirmarsenha" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label htmlFor="confirmarsenha" class="placeholder">Confirmar senha</label>
                </div>
                <button type="text" class="submit" onClick={() => { cadastrar() }}>Cadastrar</button>
            </div>
        </div>
    )
}

export default Cadastro

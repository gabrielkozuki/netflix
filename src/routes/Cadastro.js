
import './Cadastro.scss'

function Cadastro() {

    return (
        <div className="cadastro">
            <div class="form">
                <div class="title">Cadastro</div>
                <div class="subtitle">Insira suas credenciais abaixo:</div>

                <div class="input-container ic1">
                    <input id="nome" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="nome" class="placeholder">Nome</label>
                </div>
                <div class="input-container ic2">
                    <input id="idade" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="idade" class="placeholder">Idade</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="email" class="placeholder">E-mail</label>
                </div>
                <div class="input-container ic2">
                    <input id="senha" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="senha" class="placeholder">Senha</label>
                </div>
                <div class="input-container ic2">
                    <input id="confirmarsenha" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="confirmarsenha" class="placeholder">Confirmar senha</label>
                </div>
                <button type="text" class="submit">Cadastrar</button>
            </div>
        </div>
    )
}

export default Cadastro

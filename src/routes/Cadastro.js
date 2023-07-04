import { useState } from 'react';
import './Cadastro.scss'
import { useNavigate } from 'react-router-dom';
import { fazerCadastro } from '../api'

function Cadastro() {
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirmarsenha, setConfirmarsenha] = useState();
    const navigateTo = useNavigate()

    async function cadastrar() {
        let user = {
            'nome': nome,
            'idade': idade,
            'email': email,
            'senha': senha
        }

        let res = await fazerCadastro(user)

        if (res === 200) {
            alert('Cadastro efetuado com sucesso!')
            navigateTo('/login')
        } else {
            alert('Erro ao cadastrar')
        }
    }

    return (
        <div className="cadastro">
            <div className="form">
                <div className="title">Cadastro</div>
                <div className="subtitle">Insira suas credenciais abaixo:</div>

                <div className="input-container ic1">
                    <input value={nome} onChange={event => { setNome(event.target.value)}} id="nome" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="nome" className="placeholder">Nome</label>
                </div>
                <div className="input-container ic2">
                    <input value={idade} onChange={event => setIdade(event.target.value)} id="idade" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="idade" className="placeholder">Idade</label>
                </div>
                <div className="input-container ic2">
                    <input value={email} onChange={event => setEmail(event.target.value)} id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">E-mail</label>
                </div>
                <div className="input-container ic2">
                    <input value={senha} onChange={event => setSenha(event.target.value)} id="senha" className="input" type="password" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="senha" className="placeholder">Senha</label>
                </div>
                <div className="input-container ic2">
                    <input value={confirmarsenha} onChange={event => setConfirmarsenha(event.target.value)} id="confirmarsenha" className="input" type="password" placeholder=" " />
                    <div className="cut"></div>
                    <label htmlFor="confirmarsenha" className="placeholder">Confirmar senha</label>
                </div>
                <button type="text" className="submit" onClick={() => { cadastrar() }}>Cadastrar</button>
            </div>
        </div>
    )
}

export default Cadastro

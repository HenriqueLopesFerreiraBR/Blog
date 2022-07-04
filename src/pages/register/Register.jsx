import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Cadastrar</span>
        <form action="" className="registerForm">
            <label >Nome</label>
            <input type="text" placeholder="Digite seu Nome" />
            <label >Email</label>
            <input type="text" placeholder="Digite seu e-mail" />
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit" className="registerButton">Cadastrar</button>

        </form>
        <button className="loginButton">Login</button>
    </div>
  )
}

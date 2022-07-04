import "./login.css"

export default function login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Digite seu e-mail" />
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit" className="loginButton">Login</button>

        </form>
        <button className="registerButton">Registrar</button>
    </div>
  )
}

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
            <button type="submit" className="loginbutton"><a href="/home"> Login </a></button>

        </form>
        <button className="registerButton"><a href="/register"> Registrar </a></button>
    </div>
  )
}

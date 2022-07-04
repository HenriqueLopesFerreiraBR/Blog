import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWarpper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Atualize sua conta</span>
            <span className="settingsDeleteTitle">Deletar conta</span>
          </div>            
          <form className="settingsForm" action="">
            <label htmlFor="">Foto do Perfil</label>
            <div className="settigsPP">
              <img className="" src="https://img.elo7.com.br/product/zoom/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label> Nome do Usuario</label>
            <input type="text" placeholder="nome" />
            <label> E-mail</label>
            <input type="email" placeholder="email@gmail.com" />
            <label> Senha</label>
            <input type="password" placeholder="Digite dua senha" />
            <button className="settingsSubmit">Atualizar</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}

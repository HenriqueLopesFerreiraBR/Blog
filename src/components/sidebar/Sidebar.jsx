import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Sobre</span>
                <img className="sidebarImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sLi8ZXtOqBwcjx8wxBUQz8igIjUfMTmDVA&usqp=CAU" alt="" />
                <p>Algum texto qualquer para minha side bar</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle" >Categoria</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Vida</li>
                    <li className="sidebarListItem">Musica</li>
                    <li className="sidebarListItem">Sportes</li>
                    <li className="sidebarListItem">Historias</li>
                    <li className="sidebarListItem">tirinhas</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Siga nossas Redes Sociais</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
    </div>
  )
}

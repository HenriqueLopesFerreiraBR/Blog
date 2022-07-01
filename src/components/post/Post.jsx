
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://www.creativefabrica.com/wp-content/uploads/2020/11/01/Hunter-Squad-Esport-Gaming-Logo-Graphics-6405081-1.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">musica</span>    
                <span className="postCat">Video</span>    
            </div>   
            <span className="postTitle">Titulo do post</span>   
            <hr />
            <span className="postDate"> 1 hora</span>
        </div>
        <p className="postDesc">Descrição da postagem</p>
    </div>
    
  )
}

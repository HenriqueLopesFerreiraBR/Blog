import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000" alt="" />
            <h1 className="singlePostTitle">
                Titulo do Post
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAutor">Autor: meu nome</span>
              <span className="singlePostDate">Horario</span>
            </div>
            <div className="singlePostDesc">
              <p>A equipe de suporte precisa saber que a otimização de performance da renderização do DOM otimizou a </p>
              <p> renderização na organização alfanumérico dos arrays multidimensionais.</p>
            </div>
        </div>
    </div>
  )
}

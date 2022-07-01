import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://blog.2amgaming.com/wp-content/uploads/2020/01/Como-usar-o-ReShade-para-melhorar-a-imagem-dos-jogos-pelo-GeForce-Experience.jpg" alt="" />
       <form className="writeForm" action="" method="post">

            <div className="writeFormGroup">
                <label htmlFor="fileInput" >
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput"  style={{display:"none"}}/>
                <input type="text" placeholder="Titulo"  className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Conte sua Historia" type="text" className="writeInput writeText">

                </textarea>
            </div>
            <button className="writeSubmit">Postar</button>
       </form>
        
    </div>
  )
}

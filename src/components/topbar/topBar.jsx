import React from "react";
import "./topbar.css";

export default function TopBar(){
    return (
        <div className="top">
           Crônicas de T.I
           <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>

           </div>
           <div className="topCenter ">
            <ul className="topList">
                <li className="topListItem " > Inicio</li>
                <li className="topListItem" > Sobre</li>
                <li className="topListItem" > Contato</li>
                <li className="topListItem" > Autor</li>
                <li className="topListItem" > Logout</li>
            </ul>
           </div>
           <div className="topRight">
            <img className="topImage" src="http://3.bp.blogspot.com/_Q8B72nbTfOo/TTEDrw5QpMI/AAAAAAAACDo/vyl0Fa6aLs0/s320/batman-for-facebook.jpg" alt="" />
            <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    );
}
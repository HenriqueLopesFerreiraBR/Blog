import React from 'react'
import "./header.css"

export default function Header(){
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='haederTitlesSm'>React & Node</span>
                <span className='haederTitlesLg'>Blog</span>
            </div>
            <img className='headerImag' src="https://wallpaperaccess.com/full/316894.jpg" alt="" />
        </div>
    )
}
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import TopBar from "../../components/topbar/topBar";
import "./home.css"

export default function Home() {
 const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/");
      setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <>
        <TopBar />
        <Header/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar/>        
      </div>
    </>
  )
}

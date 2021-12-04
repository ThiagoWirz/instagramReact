import NavBar from "./NavBar"
import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"
import MobileBackground from "./MobileBackground"

export default function App(){
    return (
        <div>
            <NavBar/>
            <div class = "corpo">
                <div class = "esquerda">
                    <Stories/>
                    <Posts/>
                </div>
                <SideBar/>
            </div>
            <MobileBackground/> 
        </div> 
    )
}
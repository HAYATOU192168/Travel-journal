

import Worldpng from "../assets/world.png" 
export default function Header() {
    
     return(
        <header>
            <img src={Worldpng} className="image"/>
            <h1>my Travel Journal</h1>
        </header>
     )
    
}
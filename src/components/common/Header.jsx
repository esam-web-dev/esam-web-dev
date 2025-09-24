
import {Link} from "react-router-dom";
import { navLink } from "../../data/DummyData";
import Logo from "../../data/images/logoo.png";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
// import {BrowserRouter as Router}  from "react-router-dom"


export const Header = () => {


const[responsiveValeu,setResponsiveValeu] = useState(false);



    return(
        <> 
            <header>
                <div className="container flexsb">

                    <div className="logo">
                        <img src={Logo} alt="" width="85px" data-aos='fade-right'/>
                    </div>

                    <div className={responsiveValeu ? "hideMenu" : "nav"}>
                        {navLink.map((lin,i) => { return (
                            <Link key={i} to={lin.url}>{lin.text}</Link>)
                        })} 
                    </div>

                    <button style={{textAlign:"center"}} className="toggleBtn" onClick={()=> setResponsiveValeu(!responsiveValeu)}>
                        <Menu className="iconMenu"></Menu>
                    </button>

                </div>
            </header>
        
        </>
    )
}
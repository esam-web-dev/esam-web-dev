import { useState } from "react"
import { portfiloProjects } from "../../data/DummyData"
import { Visibility } from "@mui/icons-material"
import { Heading } from "../common/HeadingTitle"



const allCategory = ["all",...new Set(portfiloProjects.map((item)=> item.cat))] //

export const Portfilo = () => {

const [List, setList] = useState(portfiloProjects);
const [category, setCategory] = useState(allCategory); //

// filters items
const filterItems = (category) => {
    const newItems = portfiloProjects.filter((item) => item.cat  === category)
    setList(newItems)
//
    if(category === "all") {
        setList(portfiloProjects)
    }
}

    return (<>
    <article>
        <div className="container">
            <Heading  titlePar="Portfolio"/>
            <div className="catButton">
                {category.map((cat)=>(
                    <button className="primaryBtn" onClick={() => {filterItems(cat)}}>{cat}</button>
                ))}
            </div>
        </div>

        <div className="content gridRes">
            {List.map((items,index) => { 
                return <>
                <div className="box" data-aos='fade-up'>
                    <div className="img">
                        <img key={index} src={items.cover} alt="NoPhoto" />
                    </div>
                    <div className="overlay">
                        
                        <a href={items.title}><h2>{items.name}</h2></a>
                        <Visibility/>
                    </div>
                </div>
           </> })}
        </div>
    </article>
    
    </>)
}
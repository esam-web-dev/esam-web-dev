import CountUp from "react-countup"
import { project } from "../../data/DummyData"

export const Counter = ()=>
    {
        return <>
        <div className="hero counter">
            <div className="counter grid3 grid4">
                {project.map((val,i)=>{
                    return <>
                        <div className="box" data-aos='zoom-in'>
                            <i>{val.icon}</i>
                            <h1 className="heading"><CountUp enableScrollSpy duration={2} end={val.num}/></h1>
                            <h3 >{val.id}</h3>
                        </div>
                    
                    </>
                })}
            </div>
        </div>
        </>
    }
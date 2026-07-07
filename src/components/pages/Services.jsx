import { services } from "../../data/DummyData"
import { Heading } from "../common/HeadingTitle"

export const Services =() =>{
    return(
    <>
        <section className="services">
            <div className="container">

                <Heading titlePar="Services"/>

                <div className="conent grid3">

                    {services.map((val,index) => {
                    return <>
                        <div className="box" key={index} data-aos='flip-left'>
                            <i>{val.icon}</i>
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    </>
                    })}

                </div>
            </div>
        </section>
    
    
    </>)
}
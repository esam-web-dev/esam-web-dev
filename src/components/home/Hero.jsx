import { homeWriter } from "../../data/DummyData";
import Typewriter from "typewriter-effect"



export const Hero = () => {
    return(
    <>
    <section className="heroSection">
    
        {homeWriter.map((val,index)=>(
            <div key={index} className="heroWiterContanier">
                <h2 data-aos='fade-up'>{val.text}</h2>
                <h1>
                    <Typewriter options={{strings:[`${val.name}` ,`${val.post}`,`${val.design}` ],
                    autoStart:true,
                    loop:true
                }}></Typewriter>
                </h1>
                <p data-aos='fade-left'>{val.desc}</p>

            </div>
        ))}
    
    </section>
    
    </>)
}
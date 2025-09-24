import { contact } from "../../data/DummyData"
import { Heading } from "../common/HeadingTitle"

export const Contact = () => {
    return <>
    
    <div className="contact">
        <div className="container">
            <Heading titlePar="Keep In Touch"/>
            <div className="content flexsb">

                <div className="rigt">
                    <form>
                        <div className="flex">
                            <input type="text" placeholder="Name" data-aos='zoom-in-down'/>
                            <input type="email" placeholder="Email" data-aos='zoom-in-up'/>
                        </div>
                        <input type="text" placeholder="Subject" data-aos='zoom-in-up'/>
                        <textarea name="" id="" cols='30' rows='10'></textarea>
                        <button>Submit</button>
                    </form>
                </div>

                <div className="left">
                    {contact.map((item) => { 
                        return <>
                        <div className="box">
                            <i>{item.icon}</i>  
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </div>
    
    
    </>
}
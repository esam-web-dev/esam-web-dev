import { sosial } from "../../data/DummyData"

export const Footer = () => {
    return <>
                <footer>
                    {sosial.map((item) =>{
                        return <>
                            <i>{item.icon}</i>
                        </>
                    })}
                    <p>All Right Resved 2025</p>
                </footer>
    
    
    
    
    
    </>
}
import { about } from "../../data/DummyData"
import { Heading } from "../common/HeadingTitle"
import myPhoto from "../../data/images/MyPh.jpg"


export const About = () => {
    return (
    <>
        <section className="about">
            <div className="container flexsb"> {/* هون عملت الفلكس مشان يكونو جنب بعض  */}
                
                    <>
                        <div className="left">
                            <img className="myPhoto" src={myPhoto} alt="Nop" data-aos='fade-down-right' />
                        </div>
                        <div className="right" data-aos='fade-down-left'>
                            <Heading titlePar="About Me" />
                            <p style={{textAlign:"left", lineHeight:1.5}}> I'm a fifth-year Computer Science student with a strong passion for Front-End Development.
                                Over the past few years, I’ve been actively learning, building, and teaching modern web technologies.
                                I specialize in creating clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React.
                                Alongside my studies, I also teach Front-End development, which has helped me deepen my knowledge and improve my communication skills.
                                I enjoy turning ideas into real, interactive web experiences and I’m always eager to learn and explore the latest trends in web development.</p>
                        </div>
                    </>
                
            </div>
        </section> 
    </>
    )
}  
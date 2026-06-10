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
                            <p style={{textAlign:"left", lineHeight:1.5}}> I am a recent graduate in Information Engineering with a strong passion for Full Stack Web Development. I specialize in building modern, responsive, and user-friendly web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).
Throughout my academic journey and personal projects, I have gained hands-on experience in both front-end and back-end development, creating scalable and interactive web solutions. I enjoy transforming ideas into real-world applications while focusing on clean code, performance, and user experience.
As a lifelong learner, I continuously explore new technologies and development practices to improve my skills and stay up to date with the latest trends in web development.</p>
                        </div>
                    </>
                
            </div>
        </section> 
    </>
    )
}  

import { blog } from "../../data/DummyData"
import { Heading } from "../common/HeadingTitle"

export const Blog = () => {
    return <>
        <section className="blog">
            <div className="container">
                <Heading titlePar={Blog}/>
                <div className="content grid3">
                {blog.map((item) => {
                    return <>
                    <div className="box" data-aos="flip-left">
                        <div className="img" data-aos="flip-up">
                            <img src={item.cover} alt="NoPhoto" data-aos="flip-down"/>
                        </div>
                        <div className="text">
                            <h3 data-aos="flip-right">{item.title}</h3>
                            <p data-aos="fade-up-right">{item.desc}</p>
                        </div>
                    </div>
                    </>
                })}

                </div>
            </div>
        </section>
    
    
    </>
}
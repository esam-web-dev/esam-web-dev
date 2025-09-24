import { About } from "../pages/About";
import { Counter } from "../pages/Counter";
import { Hero } from "./Hero";
import { Services } from "../pages/Services";
import { Portfilo } from "../pages/Portfilo";
import { Tistimonials } from "../pages/Tistimonials";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Footer } from "../common/Footer";


export const Home =() => {
    return(<>
    <Hero/>
    <About/> 
    <Services/>
    <Counter/>
    <Portfilo/>
    <Tistimonials/>
    <Blog/>
    <Contact/>

    </>)
}
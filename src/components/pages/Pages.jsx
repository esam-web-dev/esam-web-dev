// Start import react-router-dom //
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// End import react-router-dom //
import { Header } from "../common/Header"
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import { Portfilo } from "./Portfilo";
import { Tistimonials } from "./Tistimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact"
import { Footer } from "../common/Footer";






export const Pages =() => {
    return(
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="/services" component={Services}/>
                    <Route  path="/portfolio" component={Portfilo}/>
                    <Route  path="/tistimonials" component={Tistimonials}/>
                    <Route  path="/blog" component={Blog}/>
                    <Route  path="/contact" component={Contact}/>
                    <Route  path="/footer" component={Footer}/>
                </Switch>
                <Footer/>
            </Router>
        
        
        
        
        </>
    )
}
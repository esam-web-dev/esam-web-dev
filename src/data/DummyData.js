import coderImage from "./images/coder.jpg";
import f1 from "./images/p1.jpg";
import f2 from "./images/p2.jpg";
import t2 from "./images/t2.jpg";
import a1 from "./images/a1.jpg";
import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import blog3 from "./images/blog3.jpg";

import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PercentOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

export const navLink = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/services", text: "Services" },
  { url: "/portfolio", text: "Portfolio" },
  { url: "/tistimonials", text: "Tistimonials" },
  { url: "/blog", text: "Blog" },
  { url: "/contact", text: "Contact" },
  { url: "/footer", text: "Footer" },
];

export const homeWriter = [
  {
   text: "HELLO I'M",
name: "Esam AbuKlam",
post: "JUNIOR FULL STACK MERN DEVELOPER",
design: "REACT & NODE.JS DEVELOPER",
desc: "I am an Information Engineering student and a passionate Junior Full Stack MERN Developer. I specialize in building responsive and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy turning ideas into real-world applications and continuously improving my development skills."
  },
];

export const services = [
  {
    id: 1,
    icon: <Code />,
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React.js, JavaScript, HTML5, and CSS3.",
  },
  {
    id: 2,
    icon: <Settings />,
    title: "Backend Development",
    desc: "Creating scalable server-side applications and RESTful APIs using Node.js and Express.js.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Web Design",
    desc: "Developing websites that provide a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Database Management",
    desc: "Designing and managing databases using MongoDB for efficient data storage and retrieval.",
  },
  {
    id: 5,
    icon: <CropRotate />,
    title: "REST API Integration",
    desc: "Integrating frontend applications with backend services and third-party APIs.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Version Control & Deployment",
    desc: "Using Git, GitHub, and modern deployment platforms to manage and publish web applications.",
  },
];
export const project = [
  {
    id: "Happy CLIENTS",
    icon: <Public />,
    num: "7",
  },
  {
    id: "LINES OF CODE",
    icon: <Code />,
    num: "720",
  },
  {
    id: "PROJECTS COMPLEATED",
    icon: <FavoriteBorder />,
    num: "30",
  },
  {
    id: "FILES DOWNLOADED",
    icon: <CloudOutlined />,
    num: "202",
  },
];

export const portfiloProjects = [
  {
    cover: coderImage,
    name: "portfolio-en-esam",
    title: "https://esam-web-dev.github.io/portfolio-en-esam/",
    cat: "Html-Css",
  },
  {
    cover: coderImage,
    name: "weathier-proj",
    title: "https://esam-web-dev.github.io/weather-app/",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "weathier-proj",
    title: "https://esam-web-dev.github.io/dashboard-ui",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "todo-list",
    title: "https://esam-web-dev.github.io/todo-list/",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "PrayerTimesApp",
    title: "https://esam-web-dev.github.io/PrayerTimesApp/",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "E-Commerce-App",
    title: "https://esam-web-dev.github.io/React-E-Commerce-App/",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "SolnHub-Landing-Page",
    title: "https://esam-web-dev.github.io/SolnHub-React-Landing-Page/",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "MealDB_Food_Recipe",
    title: "https://esam-web-dev.github.io/mealdb-food-recipe-app/",
    cat: "React",
  },
  {
    cover: coderImage,
    name: "Password-Generator-with-Options",
    title: "https://esam-web-dev.github.io/Password-Generator-with-Options/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "Events-Manager-Application",
    title: "https://esam-web-dev.github.io/Events-Manager-Application/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "Bookmarks-Manager-Application",
    title: "https://esam-web-dev.github.io/Bookmarks-Manager-Application/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "SimpleCurrencyApp",
    title: "https://esam-web-dev.github.io/SimpleCurrencyApp/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "CarCompanySite",
    title: "https://esam-web-dev.github.io/CarCompanySite/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "AdminDashboard",
    title: "https://esam-web-dev.github.io/AdminDashboard/",
    cat: "Html-Css",
  },
  {
    cover: coderImage,
    name: "CompanyProfile2",
    title: "https://esam-web-dev.github.io/CompanyProfile2/",
    cat: "Html-Css",
  },
  {
    cover: coderImage,
    name: "rock-paper-scissors-game",
    title: "https://esam-web-dev.github.io/rock-paper-scissors-game/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "memory-card-game",
    title: "https://esam-web-dev.github.io/memory-card-game/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "game-speed-test",
    title: "https://esam-web-dev.github.io/game-speed-test/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "quiz-app",
    title: "https://esam-web-dev.github.io/quiz-app/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "hangman-game",
    title: "https://esam-web-dev.github.io/hangman-game/",
    cat: "Html-Css-Js",
  },
  {
    cover: coderImage,
    name: "word-guess-game",
    title: "https://esam-web-dev.github.io/word-guess-game/",
    cat: "Html-Css-Js",
  },
];

export const testimonials = [
  {
    text: "Excellent service!",
    images: f1,
    name: "Amal",
    post: "Company Manager",
  },
  {
    text: "I highly recommend working with them.",
    images: f2,
    name: "Sarah",
    post: "Graphic Designer",
  },
  {
    text: "Very professional team with great communication.",
    images: t2,
    name: "John",
    post: "Marketing Consultant",
  },
  {
    text: "Fast delivery and outstanding quality!",
    images: a1,
    name: "Anas",
    post: "Product Manager",
  },
];

export const blog = [
  {
    cover: blog1,
    title: "Front-End Developer",
    desc: "A front-end developer is a professional who builds the visual and interactive parts of websites and web applications using technologies like HTML, CSS, and JavaScript. They focus on creating user-friendly, responsive, and accessible interfaces that work across devices and browsers.",
  },
  {
    cover: blog2,
    title: "Web Development",
    desc: "Web development refers to the process of building and maintaining websites. It involves everything from designing user interfaces to writing server-side code. In front-end development, the focus is on what users see and interact with in the browser.",
  },
  {
    cover: blog3,
    title: "Freelancer Coding",
    desc: "Freelancer coding is the practice of working independently on software or web development projects. Freelance developers often work remotely, managing their own time and clients, building websites, apps, or digital tools for businesses and individuals.",
  },
];

export const contact = [
  {
    icon: <PhoneIphone />,
    text1: "Damascus, Syria",
    text2: "+963991876771",
  },
  {
    icon: <EmailOutlined />,
    text1: "Email:",
    text2: "esamweb88@gmail.com",
  },
  {
    icon: <GitHub />,
    text1: "Github",
    text2: "https://github.com/esam-web-dev",
  },
  {
    icon: <LinkedIn />,
    text1: "LinkedIn",
    text2: "www.linkedin.com/in/esam-abuklam-9a3735386",
  },
];

export const sosial = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <YouTube />,
  },
  {
    icon: <Instagram />,
  },
];

import Navbar from "./components/Navbar/Navbar";
// import Hero from './components/Hero/Header'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testmonial/Testmonial";
export default function Home() {
  return (
    < >
      <Navbar/>
     
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
<Testimonial/>
      <Footer/>
    </>
  );
}

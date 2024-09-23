import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;

import './App.css'
import Slide from "./components/Slide/Slide"
import BlogGrid from './components/Blog/BlogGrid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <section className="home">
        <div className="left-content">
          <img src="./images/leaves.jpg" alt="" />
          <div className="logo">
            Dark Blog
          </div>
        </div>
        <div className="right-content">
          <Slide />
          <BlogGrid />
          <Footer />
        </div>
      </section>
    </>
  );
}

export default App;

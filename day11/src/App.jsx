import Header from "./components/Header";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        {/* introduce */}
        <Intro />
        {/* portfolio */}
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

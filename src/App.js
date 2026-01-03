import Home from "./components/Home";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import MatrixBackground from "./components/MatrixBackground";
export default function App() {
  return (
    <>
    <MatrixBackground />
    <div className="layout">
        <div className="content-box">
          <Home />
          <Socials />
          <Footer />
        </div>
    </div>
    </>
  );
}

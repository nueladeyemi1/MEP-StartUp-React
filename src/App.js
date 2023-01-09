import Navbar from "./components/Navbar";
import "./style.css";
import "./App.css";
import Footer from "./components/footer";

function App() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </article>
      </div>
      <Footer />
    </section>
  );
}

export default App;

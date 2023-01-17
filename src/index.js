import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App";

import Navbar from "./components/Navbar";
import "./style.css";
import "./App.css";
import "./components/review.css";
import Footer from "./components/footer";
import Footer1 from "./components/footer1";
import Review from "./components/review";

// import "./index.css";
// import App from "./App";
// import Footer from "./components/Navbar/footer";
// import App1 from "./review";

function Main() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      {/* <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </article>
      </div> */}
      {/* <Footer /> */}

      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>

      <section>
        <Footer1 />
      </section>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

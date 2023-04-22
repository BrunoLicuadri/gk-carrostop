import Header from "./components/Header";
import Bugati from "./components/CarsTop/Bugati";
import DSCar from "./components/CarsTop/DSCar";
import Comments from "./components/Comments";
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <Header />
      <main>

        <section className="card-section">
          <h1>Venha nos visitar</h1>
          <Bugati />
          <DSCar />
        </section>

        <section className="comments-section">
          <h2>O que estão dizendo</h2>
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>


    </>
  );
}

export default App

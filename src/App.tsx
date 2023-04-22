import Header from "./components/Header";
import Bugati from "./components/CarsTop/Bugati";
import DSCar from "./components/CarsTop/DSCar";



function App() {

  return (
    <>
      <Header />
      <main>

        <section className="card-section">
          <h1>Venha nos visitar</h1>
          <Bugati/>
          <DSCar/>
        </section>

        <section>
          Comments
          
        </section>


      </main>

      <footer>
        Rodapé
      </footer>


    </>
  );
}

export default App

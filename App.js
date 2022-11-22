import { NavBar } from './componentes/navbar'
import Carousel from './componentes/Carousel';
import Footer from './componentes/footer';
import './App.css'
import Cards from './componentes/Cards';
import { Acordeon } from './componentes/acordeon';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel />      
      <div className='container mb-5'>
        <br></br>
        <h1 className='text-white text-center p-2 bg-dark'>Ultimos Ingresos</h1>
        <Cards/>
      </div>      
      <div className='container mb-5 text-center'>
        <p> un Poco de musica para recorrer nuestra Web : </p>
        <iframe width="400" height="200" src="https://www.youtube.com/embed/sC8VdIXM0gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Acordeon />
      <Footer />
    </div>
  );
}

export default App;

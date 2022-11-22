import { Auto } from "./Auto";
import { Camionetas } from "./Camionetas";
import { Camiones } from "./Camiones";
import Card from "./Card";
import './cards.css';


const cards = [
    {
      id: 1,
      title: "Ford Fiesta Max 2010",
      category: Auto,
      image: '.Img/image2.jpg',
      text: 'Ford fiesta 2008 full Aire dirección, alza cristales alamar y cierre centralizado 2do de fabrica, funcionando 10 puntos vtv, cubiertas nuevas, con gnc',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=g1w2lEaw9pU",
    },
    {
      id: 2,
      title: "Vw Gol Trend",
      image: '.Img/image3.jpg',
      category: Auto,
      text: 'Impecable primera mano, aire acondicionado, dirección hidráulica, alarma y cierre centralizado de puertas. . Acepto menor valor .',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=dBsxidRbLds",
    },
    {
      id: 3,
      title: "Peugeot 207",
      image: '.Img/image4.jpg',
      category: Auto,
      text: 'Peugeot 207 GTI 1.6 Turbo año 2012. Kms: 66.500. Combustible: Nafta. Precio de contado: $ 3.200.000     Precio financiado: PREGUNTAR. Descripción: unico dueño.',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    },
    {
      id: 4,
      title: "Peugeot 206",
      image: '.Img/image5.jpg',
      category: Auto,
      text: 'El Peugeot 206 es un automóvil del segmento B producido por el fabricante francés Peugeot desde el año 1998',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    },
    {
      id: 5,
      title: "Dodge Ram 2500",
      image: '.Img/image6.jpg',
      category: Camionetas,
      text: ' Diseñamos la Ram 2500 teniendo en cuenta la comodidad de los pasajeros. Techo Solar Corredizo.',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    },
    {
      id: 6,
      title: "Ford F100",
      image: '.Img/image7.jpg',
      category: Camionetas,
      text: 'Ford F-100 2.5 I Tdi Maxion Xlt - Acepto permuta.- Financio. Cuotas fijas.',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    },
    {
      id: 7,
      title: "VW Amarok",
      image: '.Img/image8.jpg',
      category: Camionetas,
      text: 'VOLKSWAGEN AMAROK 2.0 TDI 2015 UNICO DUEÑO / 115.000KM / IMPECABLE Transferencia obligatoria, sin deudas ni infracciones',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    },
    {
      id: 8,
      title: "Scania 113",
      image: '.Img/image9.jpg',
      category: Camiones,
      text: 'Modelo 1996 Cambio de conjunto completo en diciembre del 2019. Actualmente trabajado',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    },
    {
      id: 9,
      title: "Mercedes Benz 1114",
      image: '.Img/image10.jpg',
      category: Camiones,
      text: 'Camión plancha Mercedes Benz 1114, año 73. Diez agujeros. Frenos de aire. Motor 1518 NUEVO, recién puesto en marcha, rectificado con cigueñal NUEVO. Tercer eje neumático.',
      precio: '$1600000',
      url: "https://www.youtube.com/watch?v=5RvdDRFGQTY",
    }, 

  ];
  
  function Cards() {
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map(({ title, image, text, precio, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} text={text} precio={precio}title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Cards;
  
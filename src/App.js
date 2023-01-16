import './App.css';
//importando un componente
//dentro del className se llama el componente
import Ingredientes from "./components/Ingrediente.js";
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Ingredientes</h1>
        <Ingredientes 
          nombre='Ajo Pelado'
          cantidad='10 Kg.'
          imagen='ajos.jpeg'
          tipo='licuado'
        />
        <Ingredientes 
          nombre='Cerveza'
          cantidad='4 botellas.'
          imagen='cerveza.jpeg'
          tipo=''
        />
        <Ingredientes 
          nombre='Vino Sauternes'
          cantidad='2 botellas.'
          imagen='vino.jpeg'
          tipo='liquido'
        />
        <Ingredientes 
          nombre='Vinagre'
          cantidad='4L.'
          imagen='vinagre.jpeg'
          tipo='liquido'
        />
        <Ingredientes 
          nombre='Coca-cola'
          cantidad='1L.'
          imagen='coca.jpeg'
          tipo='liquido'
        />
        <Ingredientes 
          nombre='Sillao'
          cantidad='1L.'
          imagen='sillao.jpeg'
          tipo='liquido'
        />
        <Ingredientes 
          nombre='Sal'
          cantidad='8Kg.'
          imagen='sal.jpg'
          tipo='mesa'
        />
        <Ingredientes 
          nombre='Ajinomoto'
          cantidad='1/2Kg.'
          imagen='ajinomoto.jpg'
          tipo=''
        />
        <Ingredientes 
          nombre='Mantequilla'
          cantidad='180g.'
          imagen='mantequilla.jpg'
          tipo='derretida'
        />
        <Ingredientes 
          nombre='Azúcar'
          cantidad='1/2Kg.'
          imagen='azucar.jpg'
          tipo='rubia'
        />
        <Ingredientes 
          nombre='Frijol Chino '
          cantidad='2 artusas.'
          imagen='salsadesoya.jpeg'
          tipo='entero'
        />
        <Ingredientes 
          nombre='Comino'
          cantidad='1/4.'
          imagen='comino.jpg'
          tipo='molido'
        />
        <Ingredientes 
          nombre='Pimienta Negra'
          cantidad='1/4.'
          imagen='pimienta.jpg'
          tipo='molido'
        />
        <Ingredientes 
          nombre='Caldo de pollo'
          cantidad='2 artusas.'
          imagen='caldoPollo.jpeg'
          tipo='en polvo'
        />
        <Ingredientes 
          nombre='Romero'
          cantidad='3 artusas.'
          imagen='romero.jpg'
          tipo='en polvo'
        />
        <Ingredientes 
          nombre='Anís Estrella'
          cantidad='2 artusas.'
          imagen='anisEstrella.jpeg'
          tipo='en polvo'
        />
        <Ingredientes 
          nombre='Canela china'
          cantidad='2 artusas.'
          imagen='canelaChina.jpeg'
          tipo='en polvo'
        />
        <Ingredientes 
          nombre='Kion'
          cantidad='2 artusas.'
          imagen='kion.jpeg'
          tipo='en polvo'
        />
        <Ingredientes 
          nombre='Mensí'
          cantidad='1/4 ML.'
          imagen='mensi.jpeg'
          tipo=''
        />
        <Ingredientes 
          nombre='Pimienta Blanca'
          cantidad='2 artusas.'
          imagen='pimienta blanca.jpeg'
          tipo='en polvo'
        />
        
        
        

      </div>

    </div>
  );
}

export default App;

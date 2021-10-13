//import logo from './logo.svg';
import { Await } from 'react-await';
import './App.css';

function App() {
  //Este numero seria el supuesto codigo que se le enviaria al cliente. No necesariamente debe ser un numero
  //Sin embargo he decidido usar un numero solo como prueba.
  //Se podrian crear otros codigos sin ningun problema (solo letras, letras con numeros, etc.)
  //console.log("Ss");
  //var n_aleatorio = Math.floor(Math.random() * (999999-100000)) + 100000;
  const onClickEnviar = function (evento) {
    alert("codigo enviado")
    console.log("hola")

    let correoDetalle =  fetch("http://localhost:3002/email",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name:"dani365XD"
        })
      })
  }
  return (
    <div className="App">
 
        <p>
          Numero aleatorio : ****** <br />
        </p>
        <div>
          <p>Codigo de verificacion:</p>
          
          <input type="text" placeholder="ingrese su codigo" /> <br />
        </div>
        <button onClick={onClickEnviar}>Probar</button>
        <button>Verificar</button>
      
    </div>
  );
}

export default App;

//import logo from './logo.svg';
//import { Await } from 'react-await';
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

    fetch("https://localhost:5001/api/todoverification",{
      method: "POST",
      headers: { 
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: "joshua1XD"
      })
    })
    .then(res => res.text())
    .then(mensaje => console.log(mensaje));

  }

  
  const onClickVerificar = function (evento) {
    //alert("codigo enviado")
    //console.log("hola")
    let c = document.getElementById('elcode').value;
    console.log(c);
    fetch("https://localhost:5001/api/todocomprobacion",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          code: c,
          numberi: "1"
        })
      })
      .then(res => res.text())
      .then(mensaje => {
        
          //console.log(mensaje.message);
          //console.log(mensaje.message2);
          document.getElementById('Elmensaje').textContent=mensaje;
          
          //console.log(mensaje.verification);
        
        //console.log(mensaje.message)
        
      })
     
    
  }
  

  return (
    <div className="App">
 
        <p>
          Pequeño proyecto de codigo de verificacion de usuario <br />
        </p>
        <button onClick={onClickEnviar}>Probar</button>
        <div>
          <p>Codigo de verificacion:</p>
          
          <input type="text" id="elcode" placeholder="ingrese su codigo" /> <br />
        </div>
        
        <button onClick={onClickVerificar}>Verificar</button>
        <p id='Elmensaje'></p>
        
        
      
    </div>
  );
}

export default App;

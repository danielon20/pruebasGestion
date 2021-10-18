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

    fetch("http://localhost:3002/email",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name:"dani365XD"
        })
      })
  }

  const onClickVerificar = function (evento) {
    //alert("codigo enviado")
    //console.log("hola")
    let c = document.getElementById('elcode').value;
    console.log(c);
    fetch("http://localhost:3002/verificacion",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          code: c
        })
      })
      .then(res => res.json())
      .then(mensaje => {
        if(mensaje.verification==1){
          //console.log(mensaje.message);
          //console.log(mensaje.message2);
          document.getElementById('Elmensaje').textContent=mensaje.message;
          document.getElementById('Elmensaje2').textContent=mensaje.message2;
        }
        else{
          document.getElementById('Elmensaje').textContent=mensaje.message;
          document.getElementById('Elmensaje2').textContent='';
          //console.log(mensaje.verification);
        }
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
        <p id='Elmensaje2'></p>
        
      
    </div>
  );
}

export default App;

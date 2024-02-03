import "./App.css"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


// TODO LO QUE QUIERO QUE SE VEA EN EL HTML TIENE QUE ESTAR ACA
const App = () => {
 
  // let objetoDeEstilos = {color:danger}; // h1 style = [{aqui incerto las propiedades}]
  return (

    // para exportar funciones que retornan html, tengo que exportarlas en la parte de JSX (el return de otra función) dentro del div/etiqueta principal que contenga todo el html de ese return y ahora sumado lo que contenga la nueva funcion (su html)
  
    <div>

      <Navbar/>    {/* Navbar() */}

      <h1 className="title">Hola Mundo</h1>
      {/* <h2 style={objetoDeEstilos}>hola mundo</h2> */}
      <h2 style={{color: "steelblue", fontSize: "2rem"}}>hola mundo</h2>

      <Footer/>
    </div>
  )
}

export default App

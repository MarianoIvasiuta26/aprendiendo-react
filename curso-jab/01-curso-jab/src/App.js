import './App.css';
import imagen1 from "./img/rey_sisebuto.png";
import imagen2 from "./img/rey_leogivildo.png";
import imagen3 from "./img/rey_atanagildo.png";
import imagen4 from "./img/rey_incognito.png";
import './reyes.css';

function App() {

  const cambiarImg = (e) => {
    if(e.target.src.includes('incognito')){
      e.target.style.visibility = "hidden";
    }else{
      e.target.src = imagen4;
      e.target.parentNode.style.backgroundColor = "white";
    }
    
  }

  const cambiarTexto = (e) => {
    if(e.target.innerHTML.includes('Visto')){
      e.target.innerHTML = "";
    }else{
      e.target.innerHTML = "Visto";
    }
  }

  return (
    <div className="App">
      <section className='rey1'>
        <img onClick={cambiarImg} src={imagen1} alt="" />
        <p onClick={cambiarTexto}>Sisebuto</p>
      </section>

      <section className='rey2'>
        <img onClick={cambiarImg} src={imagen2} alt="" />
        <p onClick={cambiarTexto}>Leogivildo</p>
      </section>

      <section className='rey3'>
        <img onClick={cambiarImg} src={imagen3} alt="" />
        <p onClick={cambiarTexto}>Atanagildo</p>
      </section>
    </div>
  );
}

export default App;

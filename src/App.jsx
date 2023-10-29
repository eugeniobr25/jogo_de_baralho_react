import { useState } from "react";
import baralhoCartas from "./assets/baralho-cartas.png";
import cartaUm from "./assets/carts/1.png";
import cartaDois from "./assets/carts/2.png";
import cartaTres from "./assets/carts/3.png";
import cartaQuatro from "./assets/carts/4.png";
import cartaCinco from "./assets/carts/5.png";
import cartaSeis from "./assets/carts/6.png";
import cartaSete from "./assets/carts/7.png";
import cartaOito from "./assets/carts/8.png";
import cartaNove from "./assets/carts/9.png";
import cartaDez from "./assets/carts/10.png";
import cartaOnze from "./assets/carts/11.png";
import cartaDoze from "./assets/carts/12.png";
import cartaTreze from "./assets/carts/13.png";

const App = () => {
  const [virarCarta, setVirarCarta] = useState("Verso");
  const [imgCard, setImgCard] = useState(baralhoCartas);
  const [cartas] = useState([
    cartaUm,
    cartaDois,
    cartaTres,
    cartaQuatro,
    cartaCinco,
    cartaSeis,
    cartaSete,
    cartaOito,
    cartaNove,
    cartaDez,
    cartaOnze,
    cartaDoze,
    cartaTreze
  ]);

  const sortearCarta = () => {

    // Trocar imagem da carta
    if (virarCarta === "Verso") {
      setVirarCarta("Frente")
      const index_resultado = Math.floor(Math.random()*(cartas.length));
      setImgCard(cartas[index_resultado]);
    } else {
      setVirarCarta("Verso")
      setImgCard(baralhoCartas);
    }
  };

  return (
    <>
      <h1>Virar a Carta {virarCarta}</h1>
      <div>
        <img src={imgCard}
          onClick={sortearCarta}
        />
      </div>
    </>
  );
};

export default App

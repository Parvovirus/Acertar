import React, { useState, useEffect } from "react";

function Acertar() {
  const [intervaloI, setIntervaloI] = useState(0);
  const [intervaloD, setIntervaloD] = useState(999);
  const [count, setCount] = useState(0);

  const [secreto, setSecreto] = useState();
  const [valor, setValor] = useState();

  // Para crear el nº secreto al principio
  useEffect(() => {
    setSecreto(Math.floor(Math.random() * 1000));
  }, []);

  

  //Las comprobaciones
  function comprobar(e) {
    if (secreto == e) {
      console.log("OLEEE!!! Tardaste:" + count + " intentos");
    } else if (e < secreto) {
      setCount(count + 1);
      setIntervaloI(e);
      document.querySelector("input").value = "";
    } else {
      setCount(count + 1);
      setIntervaloD(e);
      document.querySelector("input").value = "";
    }
  }
  return (
    <div>
      <header>
        <h1>ACERTAR</h1>
        <p>Se deberá de acertar un número entre el 0 y el 999.</p>
        <p>
          En caso de ir fallando se irá acortando como pistas para que el
          intervalo se vaya cerrando
        </p>
      </header>
      <input
        type="text"
        placeholder={intervaloI + "-" + intervaloD}
        onChange={(e) => setValor(e.target.value)}
      ></input>
      <button onClick={() => comprobar(valor)}>Comprobar</button>
    </div>
  );
}

export default Acertar;

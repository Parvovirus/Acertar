import React, { useState, useEffect } from "react";

function Acertar() {
  const [intervaloI, setIntervaloI] = useState(0);
  const [intervaloD, setIntervaloD] = useState(999);
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(5);
  const [secreto, setSecreto] = useState();
  const [valor, setValor] = useState();

  // Para crear el nº secreto al principio
  useEffect(() => {
    setSecreto(Math.floor(Math.random() * 1000));
  }, []);

  //Las comprobaciones
  function comprobar(e) {
    if (secreto == e) {
      setSecreto("end");
      setIntervaloI(0);
      setIntervaloD(100);

      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 4000);
      var n = 5;
      window.setInterval(function () {
        n--;
        setSecond(n)
        if (n == 0) {
            window.location.reload();
            setSecond(5);
        }
      }, 1000);
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
      {secreto == "end" ? <p>Acertaste al tardaste al {count} intentos</p> : ""}
      {secreto == "end" ? <p>Se reiniciará en {second} segundos</p> : ""}
    </div>
  );
}

export default Acertar;

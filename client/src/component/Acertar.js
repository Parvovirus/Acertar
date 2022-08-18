import React, { useState, useEffect } from "react";

function Acertar() {
  const [intervaloI, setIntervaloI] = useState(0);
  const [intervaloD, setIntervaloD] = useState(999);
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(5);
  const [secreto, setSecreto] = useState();
  const [valor, setValor] = useState();
  const [msn, setMsn] = useState();

  // Para crear el nº secreto al principio
  useEffect(() => {
    setSecreto(Math.floor(Math.random() * 1000));
  }, []);

  //Las comprobaciones
  function comprobar(e) {
    if (secreto == e) {
      setMsn("end");
      var n = 5;
      window.setInterval(function () {
        n--;
        setSecond(n);
        if (n == 0) {
          window.location.reload();
          setIntervaloI(0);
          setIntervaloD(100);
        }
      }, 1000);
    } else if (e < secreto) {
      setMsn("");
      setCount(count + 1);
      setIntervaloI(e);
      document.querySelector("input").value = "";
    } else if (e > secreto) {
      setMsn("");
      setCount(count + 1);
      setIntervaloD(e);
      document.querySelector("input").value = "";
    } else {
      setMsn("nada");
    }
  }
  return (
    <div>
      <header>
        <h1>ACERTAR</h1>
        <p>
          Se deberá de acertar un número entre el {intervaloI} y el {intervaloD}
          .
        </p>
        <p>
          En caso de ir fallando, se irá acortando el intervalo (pistas) para
          acotar el número.
        </p>
      </header>
      <input
        type="text"
        placeholder={intervaloI + "-" + intervaloD}
        onChange={(e) => setValor(e.target.value)}
      ></input>
      <button onClick={() => comprobar(valor)}>Comprobar</button>
      {msn == "end" ? (
        <div>
          <p>Acertaste al tardaste al {count} intentos</p>
          <p>Se reiniciará en {second} segundos</p>{" "}
        </div>
      ) : (
        ""
      )}
      {msn == "nada" ? <p>"Introduzca un número, por favor"</p> : ""}
    </div>
  );
}

export default Acertar;

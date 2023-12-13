// Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- 
// Avys ir Karvės. Sukurti mygtuką “į ganyklą”, kurį paspaudus 
// dešinė pusė būtų apgyvendinta avimis, kurias vaizduoja apskritimai, 
// o kairė pusė karvėmis, kurias vaizduoja keturkampiai. Avių ir karvių 
// skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis 
// numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis 
// rand skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų 
// identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” 
//   turi būti tuščia). Paspaudus ant avies arba karvės ji turi perbėgti į
//    priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal). 
//    Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai 
//    paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.

// Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! 
// Perbėgusios avys ir karvės yra dedamos į bandos galą. 

import './App.css';
import Animals from './Components/animals';
import { useState, useEffect } from "react";

function App() {

  const [karves, setKarves] = useState([]);
  const [avys, setAvys] = useState([]);
  const [click, setClick] = useState(false);




  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const arrayKarves = [];
  const arrayAvys = [];
  const k = "K";
  const a = "A";

  const handleAnimalsLength = (array, letter) => {
    for (let i = 0; i < rand(5, 20); i++) {
      array.push(
        letter +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9)
      );
    }
    return array;
  };

  const handleClick = () => {
    handleAnimalsLength(arrayKarves, k);
    handleAnimalsLength(arrayAvys, a);
    setKarves(arrayKarves);
    setAvys(arrayAvys);
    setClick(true);
  };

  useEffect(() => {
    if (click) {
      localStorage.setItem("karves", JSON.stringify(karves));
      localStorage.setItem("avys", JSON.stringify(avys));
      setClick(false);
    } else {
      const storedKarves = JSON.parse(localStorage.getItem("karves"));
      const storedAvys = JSON.parse(localStorage.getItem("avys"));

      if (storedKarves || storedAvys) {
        setKarves(storedKarves);
        setAvys(storedAvys);
      }
    }
  }, [click]);

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleClick}>
          Į ganyklą
        </button>
        <Animals
          karves={karves}
          avys={avys}
          setKarves={setKarves}
          setAvys={setAvys}
          setClick={setClick}
          click={click}
        />
        
      </header>
    </div>
  );
}

export default App;
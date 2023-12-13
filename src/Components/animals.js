export default function Animals({
    setClick,
    karves,
    avys,
    setKarves,
    setAvys,
  }) {
      
    const handleClick = (e) => {
      const id = [e.target.id];
      const animalId = karves.filter((karve) => karve === e.target.id);
  
      if (animalId[0] === id[0]) {
        console.log('Karves pries:', karves);
        setKarves(karves.filter((karve) => karve !== e.target.id));
        console.log('Karves po:', karves);
        setAvys((prev) => [...prev, e.target.id]);
      } else {
        setAvys(avys.filter((avys) => avys !== e.target.id));
        setKarves((prev) => [...prev, e.target.id]);
      }
  
      setClick(true);
    };
  
    return (
      <>
        <div className="container">
            
          <div className="containerLeft">
            <p>Karvės</p>
            {karves &&
              karves.map((animal, index) => (
                <div key={index} className="box">
                  {animal !== null && (
                    <div id={animal} className="karve" onClick={handleClick}>
                      {animal}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="containerLeft">
            <p>Avys</p>
            {avys &&
              avys.map((animal, index) => (
                <div key={index} className="box">
                  {animal !== null && (
                    <div id={animal} className="avis" onClick={handleClick}>
                      {animal}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
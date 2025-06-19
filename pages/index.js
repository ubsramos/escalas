function Home() {
  const texto1 = "Escalas para Igrejas";
  const texto2 = "Pregadores... Diáconos...Regência";

  return (
    <div style={{ textAlign: "center" ,
            fontFamily: "'Roboto Condensed', Arial, sans-serif"

    }}>
      <h1>{texto1}</h1>
      <p>{texto2}</p>
    </div>
  );
}

export default Home;

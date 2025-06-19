function Home() {
  const texto1 = "Escalas para Igrejas";
  const texto2 = "À Yone, luz da minha caminhada!";
  const texto3 = `Na Marambaia II, em uma tarde ilumidada,  
entram marchando, inalgurando mais um clube de Desbravadores –  
e tu surgiu, farda cor caqui toda arrumada e bem passada,  
cachos presos num rabo de cavalo que dançava entre louvores.  

Meu olhar perdeu o rumo, virou bússola sem Norte:  
viu teus risos de menina e já sonhou eternidade.  
Demorei na coragem – quis que o tempo fosse suporte   
para aprender teu doce nome e ganhar tua amizade.  

Chegou 8 de janeiro de 1998: primeiro “sim” você disse inteira,  
nasceu o namoro que cresceu como quem uma pipa empina.  
Cada pôr-do-sol dizia: “Deus me deu essa companheira"  
"à Yone audaz e terna que traz o amor como sua sina”.  

E quando 9 de setembro de 2001 como esperei esse dia,  
o altar selou a promessa que escrevemos lado a lado:  
desde então sou navegante e você é a luz que me guia;  
teu abraço é meu refúgio, teu sorriso é meu chamado.  

Hoje, ao lembrar, Yone, cresce em mim nova canção:  
que os anos suavizem o caminho, e amor sempre seja,  
que eu siga, louco de amor, com a mesma fervorosa paixão  
daquele primeiro olhar ao te ver na igreja.`;

  return (
    <div style={{ textAlign: "center", fontFamily: "'Roboto Condensed', Arial, sans-serif" }}>
      <h1>{texto1}</h1>
      <h3>{texto2}</h3>
      <p style={{ whiteSpace: "pre-line" }}>{texto3}</p>
    </div>
  );
}

export default Home;

// Importando as fontes (pode ser regular, bold, etc)
import "@fontsource/roboto-condensed";
import "@fontsource/roboto-condensed/700";

// Este é o componente global da aplicação, obrigatório!
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

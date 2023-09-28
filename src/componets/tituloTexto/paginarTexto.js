

const paginarTexto = (texto, caracteresPorPagina) => {
    const palabras = texto.split(" ");
    const paginas = [];
    let paginaActual = "";
  
    palabras.forEach((palabra) => {
      if (paginaActual.length + palabra.length + 1 <= caracteresPorPagina) {
        if (paginaActual !== "") {
          paginaActual += " ";
        }
        paginaActual += palabra;
      } else {
        paginas.push(paginaActual);
        paginaActual = palabra;
      }
    });
  
    if (paginaActual !== "") {
      paginas.push(paginaActual);
    }
  
    return paginas;
  }
  
  export default paginarTexto;
  //const texto = "Érase una vez en un hermoso lago, vivía un cisne elegante y orgulloso de su belleza. Todos los animales del bosque admiraban su gracia y su plumaje blanco como la nieve. Sin embargo, el cisne ocultaba un secreto: era extremadamente vanidoso. Un día, mientras el cisne nadaba, escuchó una dulce melodía proveniente de un saltamontes que saltaba de rama en rama. Fascinado por su talento musical, el cisne se acercó y elogió al saltamontes por su hermosa voz. El saltamontes, modesto y humilde, agradeció al cisne por sus amables palabras. Mientras charlaban, un gusanito se unió a la conversación. El gusanito, conocido por su sinceridad, preguntó al cisne: '¿Por qué te escondes tanto? Tu belleza es evidente para todos nosotros'. El cisne, sorprendido por la pregunta, no pudo evitar admitir su vanidad. 'Es cierto, me encanta ser admirado y siempre quiero ser el centro de atención', confesó. El saltamontes, con sabiduría, dijo: 'Querido cisne, la belleza exterior es pasajera y efímera. Lo que realmente importa es la belleza interior y la honestidad. Siempre es mejor ser honesto contigo mismo y con los demás'. El cisne, avergonzado por su vanidad, reflexionó sobre las palabras del saltamontes. Decidió cambiar su actitud y ser más honesto consigo mismo y con los demás. A partir de ese día, el cisne dejó de buscar la admiración de los demás y se enfocó en cultivar su belleza interior. Con el tiempo, el cisne se dio cuenta de que la honestidad lo hacía sentir más libre y en paz consigo mismo. Ya no necesitaba la aprobación de los demás para sentirse bien consigo mismo. A medida que compartía su belleza interior con los demás, el cisne se convirtió en un ser querido y respetado por todos los animales del bosque. Desde aquel día, el cisne, el saltamontes y el gusanito se convirtieron en grandes amigos. Juntos, enseñaron a los demás animales del bosque la importancia de la honestidad y la belleza interior. La moraleja de esta fábula es que la verdadera belleza se encuentra en el interior de las personas y que la honestidad es un valor fundamental que nos ayuda a vivir en armonía con nosotros mismos y con los demás.";
  //const caracteresPorPagina = 200; // Número máximo de caracteres por página
  
  //const paginas = paginarTexto(texto, caracteresPorPagina);
  
  // Obtener la página 1 (índice 0 en el array)
  //console.log("Página 1:", paginas[0]);
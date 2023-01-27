function exibirReceitas(titulo) {
  const receitasDescontruidas = [];

  if (titulo) {
    global.receitas.map((receita) => {
      if (receita.titulo === titulo) {
        receitasDescontruidas.push(receita);
      }
    });

    console.log(receitasDescontruidas);

    return;
  }

  global.receitas.map((item) => {
    const { titulo, ingredientes, vegana } = item;

    receitasDescontruidas.push({
      titulo,
      ingredientes,
      vegana,
    });
  });

  console.log(receitasDescontruidas);
}

export { exibirReceitas };

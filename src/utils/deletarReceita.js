function deletarReceita(id) {
  const index = global.receitas.findIndex((receita) => receita.id === id);
  console.log(index);
  global.receitas.splice(index, 1);
}

export { deletarReceita };

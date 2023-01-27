import crypto from "node:crypto";

function criarReceita({
  titulo,
  nivelDificuldade,
  ingredientes,
  intrucoes,
  linkVideo,
  vegana,
}) {
  const id = crypto.randomUUID();

  global.receitas.push({
    id,
    titulo,
    nivelDificuldade,
    ingredientes,
    intrucoes,
    linkVideo,
    vegana,
  });
}

export { criarReceita };

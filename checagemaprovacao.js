class Aluno {
  constructor(nomeAluno, notaAluno) {
    this.nome = nomeAluno;
    this.nota = notaAluno;
  }
}

const alunos = [
  new Aluno("Davi", 10),
  new Aluno("Beatriz", 9),
  new Aluno("Luiz", 5),
  new Aluno("João", 6),
  new Aluno("Maria", 4)
];

function checagemAprovacao(alunos) {
  const alunosAprovados = [];

  alunos.map((aluno) => {
    if (aluno.nota >= 6) {
      alunosAprovados.push(aluno);
    }
  });
  return alunosAprovados;
}

const alunosAprovados = checagemAprovacao(alunos);
console.log(alunosAprovados);

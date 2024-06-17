const alunos = [
    { nome: 'Victor', nota: 7 },
    { nome: 'Miguel', nota: 5 },
    { nome: 'Leticia', nota: 10 }
];

function maiorQueSeis(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = maiorQueSeis(alunos);
console.log(alunosAprovados);
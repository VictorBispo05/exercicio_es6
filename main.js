class Aluno {
    nome = '';
    nota = '';

    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const Victor = new Aluno();
Victor.nome = 'Victor';
Victor.nota = 6;

const Leticia = new Aluno();
Leticia.nome = 'Leticia';
Leticia.nota = 10;

const Miguel = new Aluno();
Miguel.nome = 'Miguel';
Miguel.nota = 4;

const Alunos = [Victor, Leticia, Miguel]

function notaMaiorQueSeis(Alunos) {
    var notaNovaVictor = parseInt(Victor.nota)
    if (notaNovaVictor>=6) console.log(Alunos[0]) 
    else console.log(Victor.nome, "não tem nota maior que seis")

    var notaNovaLeticia = parseInt(Leticia.nota)
    if (notaNovaLeticia>=6) console.log(Alunos[1]) 
    else console.log(Leticia.nome, "não tem nota maior que seis")

    var notaNovaMiguel = parseInt(Miguel.nota)
    if (notaNovaMiguel>=6) console.log(Alunos[2]) 
    else console.log(Miguel.nome, "não tem nota maior que seis")
}

notaMaiorQueSeis(Alunos);
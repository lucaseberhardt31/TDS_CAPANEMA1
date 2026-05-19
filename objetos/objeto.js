// Sintaxe de um objeto {}
const aluno = {
    nome: "Lucas", 
    idade: 15,
    curso: "Técnico em Desenvolvimento de sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);

aluno.matrícula = "2026TDS"; //adiciona uma propriedade
aluno.idade = 18; //atualiza caso existir

delete aluno.curso;
console.log(aluno);

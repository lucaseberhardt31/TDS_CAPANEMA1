/* 
Desafio: Criar um objato q contenha informações de um filme favorito,
sendo necessário inserir uma nova propriedade, modificar uma existente
e excluir uma propriedade. No final imprimir o objeto no console.
*/
const topFilmes = [
    {nome: "Shrek1", prota: "Burro", antagonista: "anão"},
    {nome: "Gato de Botas 2", prota: "Gato", antagonista: "Num Sei"},
]

topFilmes[0].antagonista = "Lord Farquard"; // modifica
topFilmes[0].prota = "Shrek"; // modifica

delete topFilmes[1].antagonista; //deleta

topFilmes[1].antagonista = "João Trombeta"; //adiciona

console.log(topFilmes);
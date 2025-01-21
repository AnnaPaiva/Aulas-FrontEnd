// no js podemos usar variaveis como o let, var ou const

const listaDeCompras = ["Açucar", false]
console.log(listaDeCompras)

//No array vc define a referencia, na primeira lista de 
//cima a posição 0 e 1 possuiam os valores(açucar e false)
// mas como em baixo foi modicado os valores(arroz e feijao)
// foi modificado o valores na lista de cima tbm, pois uma lista faz referencia a outra.

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Feijão"
console.log(listaDeCompras)
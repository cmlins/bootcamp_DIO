// var nome = 'Cinthya Lins';
// var idade = 37;
// var idade2 = 10;
// var frase = 'Japão é o melhor time do  mundo'
// // alert(nome + ' tem ' + idade + ' anos');
// // alert(idade + idade2)
// console.log(nome)
// console.log(idade)
// console.log(frase.replace('Japão', 'Brasil'))
// console.log(frase.replace('Japão', 'Brasil').toUpperCase())
// console.log(frase.replace('Japão', 'Brasil').toLowerCase())


// var frutas = ['maçã', 'pêra', 'laranja']
// frutas.push('uva')
// frutas.pop('laranja')
// console.log(frutas)
// console.log(frutas.length)
// console.log(frutas.reverse())
// console.log(frutas.toString())
// console.log(frutas.join(' - '))

// var fruta = {nome:'maçã', cor:'vermelha'}
// console.log(fruta)
// console.log(fruta.nome)

// var lista_fruta = [
//     {nome:'maçã', cor:'vermelha'}, 
//     {nome:'uva', cor:'roxa'}
// ]
// console.log(lista_fruta)
// console.log(lista_fruta[1].nome)

// var idade = prompt('Qual sua idade?')
// if (idade >= 18){
//     console.log('maior de idade')
// } else {
//     console.log('menor de idade')
// }

// var count = 0
// while (count < 5){
//     console.log(count)
//     count += 1
// }

// var count;
// for (count=0; count <=5; count +=1){
//     console.log(count)
// }

// var d = new Date()
// console.log(d.getMonth()+1)
// console.log(d.getDay())
// console.log(d.getHours())

// var lista  = [nome: “rosa” , “cravo” , “tulipa”, “margarida”]
// console.log(lista[2]);

// function soma(n1,n2){
//     return n1 + n2;
// }
// console.log(soma(10,34))

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome,novo_nome)
// }
// console.log(setReplace("Vai Japão!!", "Japão", "Brasil"))

// function validaIdade(idade){
//     // var validar;
//     if (idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade))

function clicou() {
    document.getElementById('agradecimento').innerHTML = "<b>Obrigada por clicar</b>";
    // console.log(document.getElementById('agradecimento'))
}

function redirecionar() {
    window.open('https://www.codecademy.com/')
    // window.location.href = 'https://www.codecademy.com/'
}

function trocar(elemento) {
    // document.getElementById('mousemove').innerHTML = "Obg por passar o mouse"
    elemento.innerHTML = "Obg por passar o mouse"
}

function voltar(elemento) {
    // document.getElementById('mousemove').innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
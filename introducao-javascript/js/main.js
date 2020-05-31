var nome='Rayra'
var idade="20"
var idade2=10
var idade3=20
var frase="Japão é o melhor"
var n1=5, n2=3

//alert(nome+" tem "+idade)
//alert(idade+idade2)

console.log(nome)
console.log(idade+idade2)
console.log(idade2+idade3)
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(n1*n2)
//alert(frase.replace("Japão", "Brasil"))

var lista=['maçã', 'pêra', 'laranja']
console.log(lista[0])
lista.push('uva')
console.log(lista)
lista.pop()
console.log(lista)
console.log("Tamanho da lista: "+lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.toString()[0])
console.log(lista.join(' - '))

var fruta={nome:'Maçã', cor:'vermelho'}
console.log(fruta)
console.log(fruta.nome)

var frutas=[{nome:'Maçã', cor:'vermelho'}, {nome:'Uva', cor:'verde'}]
console.log(frutas)
console.log(frutas[1].nome)

var id=prompt('Qual a sua idade? ')
if(id>=18){
  alert('Maior de idade')
}else{
  alert('Menor de idade')
}

var count=0

while(count<=5){
  console.log('while: '+count)
  count++
}

var i
for(i=0; i<=5; i++){
  console.log('for: '+i)
}

var d=new Date()
console.log(d)
console.log('Dia: '+d.getDate()+', Mês: '+(d.getMonth()+1)+', Ano: '+d.getFullYear())

function soma(n1, n2){
  return n1+n2
}

console.log('Soma: '+soma(5, 10))

function substituir(frase, nome, novoNome){
  return frase.replace(nome, novoNome)
}

console.log(substituir('O João comeu melão.', 'João', 'Astolfo'))

function validaIdade(idade){
  var validar
  if(idade>=18){
    validar=true
  }else{
    validar=false
  }
  return validar
}

var idad=prompt('Qual a sua idade?')
alert(validaIdade(idad))

function cliqueMe(){
  //alert('Clicou')
  document.getElementById('subtitulo').innerHTML='Clicou'
}

function redirecionar(){
  window.open('https://github.com')
  window.location.href='https://github.com'
}

function trocar(){
  document.getElementById('troca').innerHTML='Passou'
}

function voltar(){
  document.getElementById('troca').innerHTML='Retirou o cursor'
}

function passar(elemento){
  elemento.innerHTML='Passou'
}

function retirar(elemento){
  elemento.innerHTML='Retirou o cursor'
}

function carregar(){
  alert('Carregou')
}

function valor(elemento){
  alert('Valor: '+elemento.value)
}
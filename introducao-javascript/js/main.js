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
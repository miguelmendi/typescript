/*let number1 = document.getElementById("number1") as HTMLInputElement
let number2 = document.getElementById("number2") as HTMLInputElement
let button = document.getElementById("calculator") as HTMLButtonElement
let res = document.getElementById("result") as HTMLDivElement

function calcular(n1: number, n2: number) {
  return n1 + n2
}

button.addEventListener("click", function() {
  res.innerHTML = calcular(+number1.value, +number2.value).toString()
})*/

/*let nome: string = "Miguel"
let idade = 90

let programador: boolean = true

let nomes: string[] = ["miguel", "pedro", "luiz", "gabriel"]

let idades: number[] = [90, 15, 20, 25]

let numeros: Array<number> = [15, 23, 95, 50] 

let outrosNomes: any= ["luiza", "maria", "vitoria"]

outrosNomes.push(556)*/

/*function firstLetterUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase()
  return firstLetter+name.substring(1)
}

let nome = firstLetterUpperCase("miguel")

function somar(n1: number, n2:number): number {
  return n1+n2
}

let alguma = somar(92, 15)*/

/*let names = ["miguel", "pedro", "gabriel",90]

names.forEach(function(nome) {
  if(typeof nome === "string") {
    console.log(nome.toUpperCase())
  } else {
    console.log(nome)
  }
  
});*/

/*function resumo(usuario: {nome: string, idade?:number}) {
  if(usuario.idade !== undefined){
    return `Ola ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
  }else {
    return `Olá ${usuario.nome}, tudo bem?`
  }
}

let u = {
  nome:"Miguel",
}

resumo(u)*/

/*function mostrarIdade(idade: string | number) {
  if(typeof idade === "string"){
    console.log(idade.toUpperCase())
  } else {
    console.log(idade)
  }
}

mostrarIdade(90)
mostrarIdade("90")*/

type Idade = string | number

let idade: Idade = 90
function mostrarIdade(i: Idade): Idade{
  return i
}

//type User = {
  //nome: string,
  //idade: number
//}

interface User {
  nome: string,
  idade: number
}

function resumo(usuario: User) {
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
  nome: "Miguel",
  idade: 90
})


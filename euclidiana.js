/*
CÓDIGO FEITO PARA RECEBER OS DADOS DO USUARIO ATRAVES DE UMA STRING
Ex: '10 20'
*/

let a = gets()
//console.log(a, typeof a)
let broke = a.split(' ', 2)  
let H = broke[0] 
let P = broke[1] 
    //console.log(H, typeof H)  
    //console.log(P, typeof P)  
    //console.log(string)       
    //console.log(broke)        
let resto = parseFloat(H) % parseFloat(P)

function euclides (x , y) {
  if(resto < 0){
    
    let newResto = resto + Math.abs(P)
    let quoc = ((H - newResto)/P).toFixed(0)
    console.log(quoc + " " + newResto)
  }
  else{
    
    let divisao = (parseFloat(H) / parseFloat(P)).toFixed(0)
    console.log(divisao + " " + resto)
  }
  
}


let result = euclides(H, P)
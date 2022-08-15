const express = require("express");
const app = express();
const {romanToArab, arabToRoman, isValidArab, isValidRoman} = require('roman-numbers')

var cadaletra, letrasromanas= "", numeros, numerosromanos, maiornumero, maiornumeroromano;

app.use(express.json());

app.get("/search", function(req, res){
});

app.post("/search", function functionName(req, res){
  var {texto} = req.body;
  cadaletra = Array.from(texto);

  ApenasNumerosRomanos();
  SeparaNumerosRomanos();
  LimpaVazio();
  AchaMaiorNumero();

  res.json({ maiornumero,
             maiornumeroromano,
             numerosromanos,
             numeros
  });

  LimpaTodosValores();
});

function ApenasNumerosRomanos() {
  var i = 0;
  for (var i = 0; i < cadaletra.length; i++) {
    if (cadaletra[i] == "I" || cadaletra[i] == "V" || cadaletra[i] == "X" || cadaletra[i] == "L" || cadaletra[i] == "C" || cadaletra[i] == "D" || cadaletra[i] == "M") {
      letrasromanas =  letrasromanas + cadaletra[i]
    }
  }
}

function SeparaNumerosRomanos(){
    numerosromanos = new Array(letrasromanas.length)
    numeros = new Array(letrasromanas.length)

    for (var i = 0; i < letrasromanas.length; i++) {
      numerosromanos[i] = letrasromanas.substr(0, letrasromanas.length-i)

      if (isValidRoman(numerosromanos[i])) {
        numeros[i] = romanToArab(numerosromanos[i])
        letrasromanas = letrasromanas.replace(numerosromanos[i], '')
        i = -1
      }
      else {
        numerosromanos[i] = numerosromanos[i].replace(numerosromanos[i], '')
      }
    }
}

function LimpaVazio(){
  numeros = numeros.filter((a) => a)
  numerosromanos = numerosromanos.filter((a) => a)
}

function AchaMaiorNumero(){
  for (var i = 0; i < numeros.length; i++) {
    if (maiornumero > numeros[i]) {
      continue
    }
    else {
      maiornumero = numeros[i]
    }
  }
  maiornumeroromano = arabToRoman(maiornumero)
}

function LimpaTodosValores() {
  letrasromanas = ""
  maiornumero = ""
  maiornumeroromano =""
}

app.listen(3000, function() {
  console.log("Servidor está aberto!");
});

const express = require("express");
const app = express();
const {romanToArab, arabToRoman, isValidArab, isValidRoman} = require('roman-numbers')

app.use(express.json());

app.get("/search", function(req, res){

});



app.post("/search", function functionName(req, res){
  let {Texto} = req.body;
  let i = 0;
  let teste = Array.from(Texto);



  if (isValidRoman(Texto)) {
      let Valor = romanToArab(Texto);

      res.json({ Texto,
                 Valor
        });
    }

  else if(teste.includes("I") || teste.includes("V")|| teste.includes("X") || teste.includes("L") || teste.includes("C") || teste.includes("D") || teste.includes("M") ){
    for (i=0; i<=Texto.length; i++) {
      if (teste[i] != 1) {
        if(teste[i] == "I"|| teste[i] == "V" || teste[i] == "X" || teste[i] == "L" || teste[i] == "C" || teste[i] == "D" || teste [i] == "M"){
          let Texto = [];
          Texto[i] = teste[i];
          let Valor = romanToArab(Texto[i]);
          res.json({Texto,
            Valor
            });
        }
      }
    }
  }

  else if (Texto > 0) {
    let mudar = parseInt(Texto);
    let Valor = arabToRoman(mudar);
    res.json({Texto,
      Valor
      });

  }

  else {
    res.json({Valor: "Não Há Algarismos Romanos"
    })
  }



});

app.listen(3000, function() {
  console.log("Servidor está aberto!");
});

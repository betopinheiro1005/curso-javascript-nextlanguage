console.log("Impressão dentro do arquivo modulo.js");

import { aritmetica as calc } from "./aritmetica.js";
import mensagem, { PI, Teste, usuario } from "./constante.js";

console.log(PI);
console.log(usuario);

console.log(calc.somar(7, 3));
console.log(calc.subtracao(7, 3));

mensagem();

let teste1 = new Teste();

var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função SelcionarPares
  SelcionarPares();

});


//Função SelcionarPares
function SelcionarPares() {
  
  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let num1 = if(num1%2=1){
    let num1= num2
  }

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let num2 = Number(document.getElementById("num2").value); 
  
  //Realiza a soma do valor que está na variável "num1" com o valor que está na
  //variável "num2"
  //E a variável "result" recebe o valor da soma
  let result = num1 + num2;

  //Aqui vai escrever no input "result" o valor que está armazenado na variável "result"
  document.getElementById("result").value = result;
  
}

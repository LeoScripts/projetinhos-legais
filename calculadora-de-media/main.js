

function calcular(){
  let nota1 = document.getElementById('nota1').value;
  let nota2 = document.getElementById('nota2').value;
  let nota3 = document.getElementById('nota3').value;
  let nota4 = document.getElementById('nota4').value;
  let soma = parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4);
  let media = soma / 4;
  const resultado = document.getElementById('resultado');
  
  if(media >= 7){
    resultado.innerHTML = `Parabens sua media é ${media} e você esta aprovado`
  }else if(media < 7){
    resultado.innerHTML = `Que pena sua media é ${media} e você nao atingil a media minima`
  }else{
    resultado.innerHTML = `Por favor insira todas as notas, caso nao tenha coloque  zero`
  }

};

function limpar(){
  return nota1.value=innerHTML='',nota2.value=innerHTML='',nota3.value=innerHTML='',nota4.value=innerHTML='',resultado.innerHTML ='';
}

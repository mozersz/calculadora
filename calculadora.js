function calcularSoma()  {
var num1soma = document.getElementById('num1soma'). value;
var num2soma = document.getElementById('num2soma'). value;

num1soma = parseFloat(num1soma);
num2soma = parseFloat(num2soma);

if (isNaN(num1soma) || isNaN(num2soma)) {
    document.getElementById('resultadoSoma').innerText = 'Por favor, insira números validos.';
    return; 
}
var soma = num1soma+num2soma;
document.getElementById('resultadoSoma').innerText = 'Resultado:'+ soma;
}
function calcularsub();
var num1sub = document.getElementById('num1sub'). value;
var num2sub = document.getElementById('num2sub'). value;

num1sub = parseFloat(num1sub);
num2sub = parseFloat(num2sub);

if (isNaN(num1sub) || isNaN(num2sub)) {
    document.getElementById('resultadosub').innerText = 'Por favor, insira números validos.';
    return; 
}
var sub = num1sub+num2sub;
document.getElementById('resultadosub').innerText = 'Resultado:'+ sub;

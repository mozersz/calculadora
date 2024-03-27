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
function calcularSub()  {
var num1Sub = document.getElementById('num1Sub'). value;
var num2Sub = document.getElementById('num2Sub'). value;

num1Sub = parseFloat(num1Sub);
num2Sub = parseFloat(num2Sub);

if (isNaN(num1Sub) || isNaN(num2Sub)) {
    document.getElementById('resultadoSub').innerText = 'Por favor, insira números validos.';
    return; 
}
var soma = num1Sub-num2Sub;
document.getElementById('resultadoSub').innerText = 'Resultado:'+ soma;
}
function calcularMul()  {
var num1Mul = document.getElementById('num1Mul'). value;
var num2Mul = document.getElementById('num2Mul'). value;

num1Mul = parseFloat(num1Mul);
num2Mul = parseFloat(num2Mul);
    
if (isNaN(num1Mul) || isNaN(num2Mul)) {
    document.getElementById('resultadoMul').innerText = 'Por favor, insira números validos.';
    return; 
}
var soma = num1Mul*num2Mul;
    document.getElementById('resultadoMul').innerText = 'Resultado:'+ soma;
    }
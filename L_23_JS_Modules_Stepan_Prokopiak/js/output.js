import operations from "./operations";

 export function resultFunc() {
     var result = document.getElementById('result');
     var num1 =  parseFloat(document.getElementById('firstNumber').value);
     var num2 =  parseFloat(document.getElementById('secondNumber').value);
    
     document.getElementById("plus").addEventListener('click', function() {
         result.innerHTML = operations.sum (num1, num2);  
     });
     
     document.getElementById("minus").addEventListener('click', function() {
         result.innerHTML = operations.subtraction (num1, num2);
	 });
    
     document.getElementById("divide").addEventListener('click', function() {
         result.innerHTML = operations.division (num1, num2);
	 });
     
     document.getElementById("ml").addEventListener('click', function() {
         result.innerHTML = operations.multiplication (num1, num2);
	 });
}

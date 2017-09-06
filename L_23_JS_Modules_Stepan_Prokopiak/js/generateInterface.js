 export default () => {
    var output = document.getElementById('output');
    output.innerHTML = `<input id='firstNumber' type="text" placeholder='Pleace enter first number'/> 
                        <input id='secondNumber' type="text" placeholder='Pleace enter second number'/>
                        <div id='btn'>
                        <button id='plus' class="btn">+</button>
                        <button id='minus' class="btn">-</button>
                        <button id='divide' class="btn">:</button>
                        <button id='ml' class="btn">x</button>
                        </div>`
}
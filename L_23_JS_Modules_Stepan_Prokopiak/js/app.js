import createInterface from "./generateInterface"
import {resultFunc} from "./output"

createInterface();

document.getElementById('btn').addEventListener('click', function(){
    resultFunc();
});

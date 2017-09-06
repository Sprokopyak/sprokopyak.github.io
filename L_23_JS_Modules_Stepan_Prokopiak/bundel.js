/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generateInterface__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output__ = __webpack_require__(2);



Object(__WEBPACK_IMPORTED_MODULE_0__generateInterface__["a" /* default */])();

document.getElementById('btn').addEventListener('click', function(){
    Object(__WEBPACK_IMPORTED_MODULE_1__output__["a" /* resultFunc */])();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
 /* harmony default export */ __webpack_exports__["a"] = (() => {
    var output = document.getElementById('output');
    output.innerHTML = `<input id='firstNumber' type="text" placeholder='Pleace enter first number'/> 
                        <input id='secondNumber' type="text" placeholder='Pleace enter second number'/>
                        <div id='btn'>
                        <button id='plus' class="btn">+</button>
                        <button id='minus' class="btn">-</button>
                        <button id='divide' class="btn">:</button>
                        <button id='ml' class="btn">x</button>
                        </div>`
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resultFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(3);


 function resultFunc() {
     var result = document.getElementById('result');
     var num1 =  parseFloat(document.getElementById('firstNumber').value);
     var num2 =  parseFloat(document.getElementById('secondNumber').value);
    
     document.getElementById("plus").addEventListener('click', function() {
         result.innerHTML = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].sum (num1, num2);  
     });
     
     document.getElementById("minus").addEventListener('click', function() {
         result.innerHTML = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].subtraction (num1, num2);
	 });
    
     document.getElementById("divide").addEventListener('click', function() {
         result.innerHTML = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].division (num1, num2);
	 });
     
     document.getElementById("ml").addEventListener('click', function() {
         result.innerHTML = __WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].multiplication (num1, num2);
	 });
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function sum (a, b) {
    return a + b;
}

function subtraction (a, b) {
    return a - b;
}

function division (a, b) {
    return a / b;
}

function multiplication (a, b) {
    return a * b;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    sum: sum,
    subtraction: subtraction,
    division: division,
    multiplication: multiplication
});

/***/ })
/******/ ]);
var eurValue = prompt('Введіть суму євро, яку Ви хочете конвертувати', '');
var usdValue = prompt('Введіть суму доларів, яку Ви хочете конвертувати', '');

var eur = 29.785;
var usd = 26.143;
var eur_quantity = Math.round(eurValue * eur);
var usd_quantity = Math.round(usdValue * usd);
var eur_usd = Math.round ((eur / usd)*1000)/1000;
 
alert (eurValue + ' euros are equal ' + eur_quantity + ' UAH, ' + usdValue + ' dollars are equal ' + usd_quantity + ' UAH, ' + 'one euro is equal ' + eur_usd  + ' dollars.');

var startGame = confirm('Чи бажаєте почати гру?');
var numberInterval = 5;
var attempt = 4;
var winning = 0;
var winningMultyply = 1;

if (startGame) {
    while (attempt > 1) {
        attempt--;

        var randomNumber = Math.floor((Math.random() * numberInterval) + 1);
        var userEnterValue = prompt('Введіть число від 0 - ' + numberInterval + '. У Вас залишилось ' + attempt + ' спроб.');

        if ((isNaN(userEnterValue)) || userEnterValue === '') {
            alert("Будь ласка, введіть число від 0 - " + numberInterval);
        } else if (userEnterValue == randomNumber) {

            switch (attempt) {
                case 3:
                    winning += 10 * winningMultyply;
                    break;
                case 2:
                    winning += 5 * winningMultyply;
                    break;
                case 1:
                    winning += 2 * winningMultyply;
                    break;
                default:
                    break;
            }
            console.log('Ваш виграш становить: ' + winning + '$');

            var continueGame = confirm('Бажаєте продовжити?');
            if (continueGame) {
                attempt = 4;
                winningMultyply *= 3;
                numberInterval *= 2;
            } else {
                console.log('Дякую за гру, Ваш виграш становить: ' + winning + '$');
                break;
            }
        } else if (userEnterValue === null) {
            console.log('Ваш виграш - ' + winning + '$');
            break;
        } 
        
        if (attempt === 1) {
            numberInterval = 5;
            winningMultyply = 1;
            winning = 0;
            console.log('Ваш виграш - 0$');
           
            var continueGame = confirm('Бажаєте спробувати знову?');
            if (continueGame === true) {
                attempt = 4;
            } else {
                console.log('Сьогодні ви не виграли мільйон, а могли!');
            }
        }
    }
} else {
    console.log('Сьогодні ви не виграли мільйон, а могли!');
}
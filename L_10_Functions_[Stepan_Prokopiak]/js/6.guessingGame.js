(function() {
    var numberInterval = 5;
    var attempt = 4;
    var winning = 0;
    var winningMultyply = 1;

    var startGame = confirm('Чи бажаєте почати гру?');
    if (startGame) {
        start();
    } else {
        console.log('Сьогодні ви не виграли мільйон, а могли!');
    }

    function getRamdomNumber() {
        return Math.floor((Math.random() * numberInterval) + 1);
    }

    function tryAgain() {
        if (attempt === 1) {
            numberInterval = 5;
            winningMultyply = 1;
            winning = 0;
            console.log('Ваш виграш - ' + winning + '$');

            var continueGame = confirm('Бажаєте спробувати знову?');
            if (continueGame) {
                attempt = 4;
            } else {
                console.log('Сьогодні ви не виграли мільйон, а могли!');
            }
        }
    }

    function continueGam() {
        var continueGame = confirm('Бажаєте продовжити?');
        if (continueGame) {
            attempt = 4;
            winningMultyply *= 3;
            numberInterval *= 2;
        } else {
            attempt = 0;
            console.log('Дякую за гру, Ваш виграш становить: ' + winning + '$');
        }
    }

    function start() {
        while (attempt > 1) {
            attempt--;

            var winningValue = getRamdomNumber();
        
            var userEnterValue = prompt('Введіть число від 0 - ' + numberInterval + '. У Вас залишилось ' + attempt + ' спроб.');

            if ((isNaN(userEnterValue)) || userEnterValue === '') {
                alert("Будь ласка, введіть число від 0 - " + numberInterval);
            } else if (userEnterValue == winningValue) {

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
                continueGam();

            } else if (userEnterValue === null) {
                console.log('На жаль Ви покинули гру, Ваш виграш - ' + winning + '$');
                break;
            }
            tryAgain();
        }
    }
})();
var steps, count, winner, stop, time, timer;
window.onload = load();

//generate random position of blocks
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//check if user win the game
function check() {
    stop = true;
    for (var i = 0; i < winner.length; i++)
        if (winner[i] != count[i]) stop = false;
    return stop;
}

//change numbers in blocks
function swap(a, b) {
    $('#' + (b)).html(count[a]);
    $('#' + (a)).html("");
    count[a] += count[b];
    count[b] = count[a] - count[b];
    count[a] -= count[b];
    steps++;
    $("#steps").text(steps);
    stop = check();
    if (stop) {
        alert("Congratulations you win");
        stopTimer();
    }
}

function oneline(n, m) {
    return Math.floor(n / 4) == Math.floor(m / 4);
}

function chooseClick(num) {
    if (!stop) {
        if (count[num + 4] == 0) swap(num, num + 4);
        if (count[num - 4] == 0) swap(num, num - 4);
        if (count[num + 1] == 0 && oneline(num, num + 1)) swap(num, num + 1);
        if (count[num - 1] == 0 && oneline(num, num - 1)) swap(num, num - 1);
    }
}

//timer
function startTimer() {
    var minutes = 0;
    var seconds = 0;
    timer = setInterval(function() {
        seconds++;
        minutes = (seconds > 59) ? ++minutes : minutes;
        seconds = (seconds > 59) ? 0 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        minutes < 10 ? $('.minutes').html('0' + minutes) : $('.minutes').html(minutes);
        $(".seconds").text(seconds);
    }, 1000)
}

function stopTimer() {
    clearInterval(timer);
}

//when page is loading, this function work
function load() {
    count = [];
    winner = [];
    stop = false;
    stopTimer();
    startTimer();
    for (var i = 0; i < 16; i++) {
        count.push(i);
        if (i > 0) winner.push(i);
        $('td').attr("id", function(i) {
            return i;
        });
    }
    winner.push(0);
    steps = 0;
    time = 0;
    $("#steps").text(steps);
    count = shuffle(count);
    for (var i = 0; i < count.length; i++) {
        $('#' + (i)).html((count[i] != 0 ? count[i] : ''));
    }
}

//button 'new game'
$("#restart").click(function() {
    load();
});

//button 'win'
$("#win").click(function() {
    count = [];
    winner = [];
    for (var i = 1; i < 17; i++) {
        if (i === 16) {
            count.push('');
        } else {
            count.push(i);
        }
        $('td').attr("id", function(i) {
            return i;
        });
    }
    for (i = 0; i < count.length; i++) {
        $('#' + (i)).html((count[i] != 0 ? count[i] : ''));

    }
    stopTimer()
});

//move blocks
$(document).ready(function() {
    $('td').click(function() {
        chooseClick(+($(this).attr('id')));
    });
});
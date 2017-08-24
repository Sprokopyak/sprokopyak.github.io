//to check how my code work use "allow control allow origin chrome"

function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status == 200) {
                try {
                    var response = JSON.parse(xhr.responseText);
                } catch (error) {
                    console.log(error.message + " in " + xhr.responseText);
                    return;
                }
                resolve(response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

var getAstros = getJSON("http://api.open-notify.org/astros.json")
    .then(
        function(response) {
            console.log(response)
        }, function(error) {
            console.log(`Rejected: ${error}`)
        }
);

console.log(typeof(getAstros));



//Task2
//to check how my code work use "allow control allow origin chrome"

function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status == 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                } catch (error) {
                    console.log(error.message + " in " + xhr.responseText);
                    return;
                }
                resolve(data);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

getJSON('http://marsweather.ingenology.com/v1/archive/?page=1&format=json&callback')
    .then(
        function(data) {
           renderHTML(data);
        },
        function(error) {
            console.log(`Rejected: ${error}`);
        }
    );

var pageCounter = 1;
function renderHTML(data) {
    var index = 0;
    var item = data.results[index];
    var date = document.getElementById('date');
    var minTemp = document.getElementById('minTemp');
    var minTempFahr = document.getElementById('minTempFahr');
    var maxTemp = document.getElementById('maxTemp');
    var maxTempFahr = document.getElementById('maxTempFahr');
    var direction = document.getElementById('direction');
    var speed = document.getElementById('speed');
    var previous = document.getElementById('previous');
    var next = document.getElementById('next');

    displayItem(item);

    previous.addEventListener('click', function() {
        displayItem(data.results[--index]);
    });

    next.addEventListener('click', function() {
        displayItem(data.results[++index]);
    });

    function displayItem(item) {
        date.innerText = item.terrestrial_date;
        minTemp.innerText = item.max_temp;
        minTempFahr.innerText = item.min_temp_fahrenheit;
        maxTemp.innerText = item.max_temp;
        maxTempFahr.innerText = item.max_temp_fahrenheit;

        if (item.wind_direction === "--") {
            direction.innerText = 'Not found';
        } else {
            direction.innerText = item.wind_direction;
        }

        if (item.wind_speed === null) {
            speed.innerText = 'Not found';
        } else {
            speed.innerText = item.wind_speed;
        }

        previous.disabled = index <= 0;
        next.disabled = index >= data.results.length - 1;

        if (index === 9) {
            index = 0;
            pageCounter++;
            getJSON(`http://marsweather.ingenology.com/v1/archive/?page=${pageCounter}&format=json&callback`)
            .then(
                function(data) {
                    renderHTML(data);
                },
                function(error) {
                    console.log(`Rejected: ${error}`);
                }
            );
            document.getElementById("preloader").style.display = "block";
        } else if (index === 0) {
            document.getElementById("preloader").style.display = "none";
        }
    }
}
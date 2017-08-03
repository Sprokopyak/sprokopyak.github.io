function Casino(slotMachines, initialAmountMoney) {
    this.machineArray = [];
    this._initialMoney = initialAmountMoney;


    if (isNaN(initialAmountMoney) || isNaN(machineArray) || machineArray < 1 || initialAmountMoney < 0) {
        console.log('Please, enter valid value');
    } else {
        var moneyInMashine = Math.floor(initialAmountMoney / machineArray);
        var moneyInFirstMashine = Math.round(this.moneyInMashine + (initialAmountMoney - this.moneyInMashine * machineArray));

        var luckyNumber = Math.floor((Math.random() * slotMachines));

        machineArray.push(new SlotMachine(initialMoneyFirstMachine));
        for (var i = 1; i < slotMachines; i++) {
            machineArray.push(new SlotMachine(initialMoneyInMachine));
        }
        machineArray[luckyNumber].setLucky = true;
        return machineArray;
    }

    this.getTotalMoney = function() {
        var sumMoney = 0;
        for (let i = 0; i < this.machineArray.length; i++) {
            sumMoney += this.machineArray[i].getMoney;
        }
        console.log(`Total money in Casino: $ {sumMoney}`);
        return sumMoney;
    }

    this.getTotalNumberOfSlotMachines = function() {
        console.log(`Total number of slot machines in casino: ${this.machineArray.length}`);
        return this;
    }

    this.addMachine = function() {
        var machineNumber = this.machineArray.reduce(function(a, b) {
            return Math.max(a, b._initialMoney) / 2;
        }, 0);
        return this.machineArray.push(new SlotMachine(machineNumber));
    }

    this.removeSlotMashine = function(id) {
        if (id < 0 || isNaN(id)) {
            console.log("Can't find Machine with such id, please enter valid id");
        } else if (this.machineArray.length === 0) {
            console.log('No Machines left to remove');
        } else {
            var remove = this.machineArray[id - 1]._initialMoney;
            this.machineArray.splice(id - 1, 1);
            this._initialMoney += remove;
        }
    }

    this.takeMoneyFromCasino = function(money) {
        if (this.getTotalMoney() < money) {
            console.log('Not enough money in Casino');
        } else if (money <= 0 || isNaN(money)) {
            console.log('Incorrect value');
        } else {

            var _money = this.machineArray.sort(function(a, b) {
                return b._initialMoney - a._initialMoney;
            });
            var newMoney = money;
            for (let i = 0; i < _money.length; i++) {
                if (_money[i]._initialMoney < newMoney) {
                    newMoney = money - _money[i]._initialMoney;
                    _money[i]._initialMoney = 0;
                } else if (_money[i]._initialMoney === money) {
                    _money[i]._initialMoney = 0;
                    break;
                } else {
                    _money[i]._initialMoney = _money[i]._initialMoney - newMoney;
                    break;
                }
                this.machineArray = _money;
                return this.machineArray;
            }
        }
    }
    this.machineArray.unshift(new SlotMachine(this.moneyInFirstMashine))
}

function SlotMachine(initialAmountMoney) {
    this.money = initialAmountMoney;
    this.setLucky = false;

    if (initialAmountOfMoneyMachine < 0 || isNaN(initialAmountOfMoneyMachine)) {
        console.log('Please enter correct value');
    }

    this.getMoneyInMachine = function() {
        return this.money;
    }

    this.takeMoney = function(amountOfMoney) {
        if (isNaN(amountOfMoney) || amountOfMoney <= 0) {
            console.log('Put a valid amount');
            return;
        }
        if (this.money === 0) {
            console.log('Machine is empty');
            return;
        }
        if (this.money < amountOfMoney) {
            console.log('You can get no more than ' + this.money);
            return;
        }
        this.money -= amountOfMoney;
        console.log('You got ' + amountOfMoney);
        console.log('Total amount remaining in Slot: ' + this.money);
        return this;
    }

    this.putMoney = function(amountOfMoney) {
        if (amountOfMoney <= 0 || isNaN(amountOfMoney)) {
            console.log('Incorrect value');
        } else {
            this.money += amountOfMoney;
            return this;
        }
    }

    this.play = function(amountOfMoney) {

        var firstNumber = Math.round(Math.random() * 9);
        var secondNumber = Math.round(Math.random() * 9);
        var thirdNumber = Math.round(Math.random() * 9);

        if (amountOfMoney < 0) {
            console.log(`${amountOfMoney}$ - Please, enter only positive value`);
        } else if (!isInteger(amountOfMoney)) {
            console.log(`${amountOfMoney} only integer value!`);
        } else {

            if ((this.lucky) && (firstNumber === 7) && (secondNumber === 7) && (thirdNumber === 7)) {
                do {
                    firstNumber = Math.round(Math.random() * 9);
                    secondNumber = Math.round(Math.random() * 9);
                    thirdNumber = Math.round(Math.random() * 9);
                } while ((firstNumber === 7) && (secondNumber === 7) && (thirdNumber === 7))
            }
            console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);

            if (amountOfMoney * 5 > this.money) {
                console.log(`${amountOfMoney}$ - It's too much! ${Math.round(this.money/5)}`);
            } else if ((firstNumber === 7) && (secondNumber === 7) && (thirdNumber === 7)) {
                console.log(`You are winner${this.money}$`);
                this.money = 0;
            } else if ((firstNumber === secondNumber) && (secondNumber === thirdNumber) && (firstNumber === thirdNumber)) {
                console.log(`You are winner ${amountOfMoney*5}$`);
                this.money -= amountOfMoney * 5;
            } else if ((firstNumber === secondNumber) || (secondNumber === thirdNumber) || (firstNumber === thirdNumber)) {
                console.log(`You are winner${amountOfMoney*2}$`);
                this.money -= amountOfMoney * 2;
            } else {
                console.log(`Unfortunly you didn't win`);
                this.money += amountOfMoney;
            }

        }
        return this;
    }
}
    
     module.exports = {
       casino: Casino,
       slotMachine: SlotMachine
   };
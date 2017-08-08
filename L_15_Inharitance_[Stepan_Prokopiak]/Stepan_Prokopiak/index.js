function myAssign() {
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                arguments[0][key] = arguments[i][key];
            }
        }
    }
    return arguments[0];
}

function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Character(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;
}

Character.prototype.getHitpoints = function() {
    return this.hitpoints;
};

Character.prototype.setHitpoints = function(value) {
    if ((!isNaN(value)) && (value > 0)) {
        if (value > this.totalHitpoints) {
            this.hitpoints = this.totalHitpoints;
        } else {
            this.hitpoints = value;
        }
    } else {
        this.hitpoints = 0;
    }
};

Character.prototype.getTotalHitPoints = function() {
    return this.totalHitpoints;
}

Character.prototype.setTotalHitpoits = function(value) {
    if ((!isNaN(value)) && (value > 0)) {
        this.hitpoints = value;
    } else {
        this.hitpoints = 0;
    }
};

Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        return true;
    } else {
        return false;
    }
}

Character.prototype.getAttack = function() {
    return this.attack;
};

Character.prototype.setAttack = function(value) {
    if ((!isNaN(value)) && (value > 0)) {
        this.attack = value;
    } else {
        this.attack = 0;
    }
};

Character.prototype.fight = function(enemy) {
    if (this === enemy) {
        console.log('You can not fight with yourself!')
    } else if (!enemy.isAlive()) {
        console.log('Your enemy has dead already.');
    } else if (enemy.isDefence === true) {
        console.log('You can not fight with this enemy, he is dead.');
        enemy.isDefence = false;
    } else {
        enemy.hitpoints -= this.attack;
    }
}

function Champion(obj) {
    Character.call(this, obj);
    this.isDefence = false;
    return this;
};

inherit(Champion, Character);

Champion.prototype.rest = function() {
    this.hitpoints += 5;
    if (this.hitpoints > this.totalHitpoints) {
        return this.totalHitpoints;
    } else {
        return this.hitpoints;
    }
}

Champion.prototype.defence = function() {
    this.isDefenced = true;
};

Champion.prototype.fight = function(enemy) {
    if (enemy.hitpoints > 0) {
        Character.prototype.fight.call(this, enemy);
        if (enemy.hitpoints <= 0) {
            this.attack += 1;
        }
    }
    return this;
}

function Monster(obj) {
    Character.call(this, obj);
    this.hasEnrage = 0;
}

inherit(Monster, Character);

Monster.prototype.enrage = function() {
    this.hasEnrage = 2;
};

Monster.prototype.fight = function(enemy) {
    if (this.hasEnrage > 0) {
        this.attack *= 2;
        Character.prototype.fight.call(this, enemy);
        this.attack /= 2;
        this.hasEnrage--;
    } else {
        Character.prototype.fight.call(this, enemy);
    }
    if (enemy.isAlive() === false) {
        this.hitpoints += Math.floor((enemy.totalHitpoints * 25) / 100);
        this.totalHitpoints += Math.floor((enemy.totalHitpoints * 10) / 100);
    }
}

module.exports = {
    myAssign: myAssign,
    Champion: Champion,
    Monster: Monster,
}
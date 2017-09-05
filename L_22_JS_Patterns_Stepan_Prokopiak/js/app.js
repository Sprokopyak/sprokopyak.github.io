class User {
    constructor(name) {
        this.name = name;
        
        this.lastVisitDate = new Date(new Date(2017, 0, 1).getTime() + Math.round(Math.random() *
            (new Date().getTime() - new Date(2017, 0, 1).getTime())));
        this.globalDiscount = Math.round((Math.random() * 20));
        this.nightDiscount = Math.round((Math.random() * 30));
        this.weekendDiscount = Math.round((Math.random() * 25));
        this.ordersCount = Math.round((Math.random() * 10));
        this.ordersTotalPrice = Math.round((Math.random() * 1000));
        this.bonus = Math.round((Math.random() * 100));

    }
}

var user = new User();

function getDiscount(user) {
    var totalDiscount = this.user.globalDiscount;
    var date = new Date();
    
    if ((date.getHours() >= 23) && (date.getHours() <= 5)) {
        totalDiscount += this.nightDiscount;
    }
    if ((date.getDay() === 0) || (date.getDay() === 6)) {
        totalDiscount += this.weekendDiscount;
    }
    return totalDiscount;
}

function getBonus(user) {

    var lastVisit = (new Date().getTime() - this.user.lastVisitDate.getTime()) / 1000 / 60 / 60;
    if (lastVisit <= 240) {
        this.user.bonus += parseInt(240 - lastVisit);
    }
    ++this.user.ordersCount;
}
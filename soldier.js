const soldier = {
    name: "Isa",
    helth: 10,
    gun: {
        gunName: "Glock",
        patron: 30
    },
    gunVal: 3,
    fire: function () {
        this.gun.patron--;
        if (this.gun.patron == 0) {
            console.log ("Обойма пуста. Перезаредитесь.");
        }else {
            console.log ("бах-бах");
        }
    },
    reval: function () {
        this.gun.patron = 30;
        this.gunVal--;
        if (this.gunVal == 0) {
        console.log ("Не осталось припасов");
        }else {
            console.log("Перезарядка...");
        }
    },
    murder: function () {
        this.helth--;
        if (this.helth == 0) {
            console.log ("Ты проиграл");
        }
    }
};
soldier.fire();
console.log(soldier.gun.patron);
soldier.reval();
console.log(soldier.gun.patron);

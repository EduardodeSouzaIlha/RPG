class Characters {
    constructor(name, power, life, realLife,attack, info,image, gold, x, y, velocity) {
        this.name = name;
        this.power = power;
        this.life = life;
        this.realLife = realLife;        
        this.attack = attack;
        this.info = info;
        this.image = image;
        this.gold = gold;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
    }

}
export const character1 = new Characters("character1", "laser", 100, 100, 10, $('#character1'), $('#character-player1'), 0, 0,180, 10 )
export const character2 = new Characters("character2", "slimegun", 80, 80,12, $('#character2'), $('#character-player2'), 0, 0, 180, 12 )
export const character3 = new Characters("character3", "pistol", 50, 50,15, $('#character3'), $('#character-player3'), 0, 0, 180, 15)

class Enemies{
    constructor(name, life, attack, power, image, pow) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.power = power;
        this.image = image;
        this.pow = pow;
    }

}
export const enemy1 = new Enemies("enemy1", 400, 10, `<img src="/img/attack1.png"/>`, `<img class="enemy" src="/img/enemy2.png"/>`, `<img src="/img/pow.png"/>`)
export const enemy2 = new Enemies("enemy2", 500, 12, `<img src="/img/attack2.png"/>`,`<img class="enemy" src="/img/enemy.png">`, `<img src="/img/pow.png"/>`)





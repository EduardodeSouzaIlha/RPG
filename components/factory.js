class Characters {
    constructor(name, power, life, realLife,attack, info,image, gold, x, y) {
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
    }

}
export const character1 = new Characters("character1", "laser", 100, 100, 10, $('#character1'), $('#character-player1'), 0, 180, 0 )
export const character2 = new Characters("character2", "slimegun", 80, 80,12, $('#character2'), $('#character-player2'), 0, 180, 0 )
export const character3 = new Characters("character3", "pistol", 50, 50,15, $('#character3'), $('#character-player3'), 0, 180, 0)

class Enemies{
    constructor(name, life, attack, power, image) {
        this.name = name;
        this.life = life;
        this.atack = attack;
        this.power = power;
        this.image = image;
    }

}
export const enemy1 = new Enemies("enemy1", 200, 10, `<img src="/img/attack1.png"/>`, `<img class="enemy" src="/img/enemy2.png"/>`)
export const enemy2 = new Enemies("enemy2", 400, 12, ``,`<img class="enemy" src="/img/enemy.png">`)
export const enemy3 = new Enemies("enemy3", 500, 13, ``,`<img class="enemy" src="/img/enemy1.png"></img>`)
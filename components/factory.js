class Characters {
    constructor(name, power, life, info,image) {
        this.name = name;
        this.power = power;
        this.life = life;
        this.info = info;
        this.image = image;
    }

}
export const character1 = new Characters("character1", "lazer", 100, $('#character1'), $('#character-player1'))
export const character2 = new Characters("character2", "lazer", 100,  $('#character2'), $('#character-player2'))
export const character3 = new Characters("character3", "lazer", 100,  $('#character3'), $('#character-player3'))

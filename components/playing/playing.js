import { player} from '/components/game/game.js'
import {enemy1, enemy2, enemy3} from '/components/factory.js'
const delta = 5
//BACKGROUND

$('#background').addClass('background1')

//PLAYERS

$('#player-game').prepend(player.image);

let user = player

addEventListener('keydown', function(e){
   jump(e)
  
})

function jump(e){
    if(e.key === "w" && !user.image.hasClass("player-jump") ){
        user.image.addClass('player-jump')
        setTimeout(()=>{
            user.image.removeClass('player-jump')

        }, 900)
    }
    if(e.key === "s" && user.image.hasClass("player-jump") ){
            user.image.removeClass('player-jump')

    }
}
setInterval(()=>{
    addEventListener('keydown', function(e){
        move(e)
    })
},300)
function move(e){
    if(e.key == "d"){
       
    }
    if(e.key == "a"){
       
    }
   
}

//ENEMY
$('#enemy-img').html(enemy1.image)
 $('#attack').html(enemy1.power)
 $('#attack').children().addClass('attack-move')

//Info-players

$('#coin').html(player.gold)
$('#life-player').html(player.life)
$('#life-enemy').html(enemy1.life)

//SHOP
$('#shop').click(()=>{
    $('#display-shop').css("display", "block")
})
$('#background').click(()=>{
    if($('#display-shop').css("display") === "block"){
        $('#display-shop').css("display", "none")
    }
})
$('#moreLife').click(()=>{  
    $('#life-player').html(player.life + 40);
})

 
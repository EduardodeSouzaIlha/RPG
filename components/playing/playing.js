import { player} from '/components/game/game.js'
import {enemy1, enemy2} from '/components/factory.js'
let enemy = enemy1
let attack = $('#attack').html(enemy.power)
attack.children().addClass('attack-move')
//BACKGROUND

$('#background').addClass('background1')


//PLAYERS

let user = player
const delta = user.velocity
$('#player-game').prepend(user.image);

setInterval(()=>{
    user.y = user.image.css("top").split("p", 2)[0]
}, 1)
addEventListener('keypress', function(e){
    move(e)
     

})

$('#background').click(function(e){
   attackPlayer()
})

function attackPlayer(){
    if(user.x < 480 && user.x > 400){
        if(enemy.life > 0 && user.life > 0){
           
                enemy.life -= user.attack

            }
            
            else if (enemy.life <= 0){
                attack.children().removeClass('attack-move')
                $('#end').html("You Win").hide(1000).show(1000).fadeOut(1000).css("color","green")
                setTimeout(()=>{
                    
                    enemy = enemy2
                    $('#background').removeClass('background1')
                    $('#background').addClass('background2')
                    attack = $('#attack').html(enemy.power)
                    attack.children().addClass('attack-move')
                }, 3000)
               
            }
        }
    }
        
function setPosition(){   
            user.image.css("left", `${user.x}px`)      
}
function move(e){
    if(user.x < 500){
        if(e.key === "d"){
            user.x += delta
            setPosition()
           
        }
    }
    if(user.x >= -100){

        if(e.key === "a"){
            user.x -= delta
            setPosition()
           
    }
}
if(e.key === "w" && !user.image.hasClass("player-jump") ){
    user.image.addClass('player-jump')
    
    
    setPosition()
    setTimeout(()=>{
        user.image.removeClass('player-jump')
        
    }, 900)
}
if(e.key === "s" && user.image.hasClass("player-jump") ){
    setPosition()
    user.image.removeClass('player-jump')
    
}
}
//ENEMY

setInterval(()=>{
    $('#enemy-img').html(enemy.image)
    let positionAttackX = parseInt($('#attack').children().css("left"), 10)
    positionAttack(positionAttackX)
}, 1)


function positionAttack(positionAttackX){
    if(positionAttackX < user.x+100 && user.y > 160 && positionAttackX > user.x-50){
        
        
        if(user.life == 0 || (user.life - enemy.attack)<0 ){
           $('#end').html("You died").hide(1000).show(5000).fadeOut(5000).css("color","red")
           attack.children().removeClass('attack-move')
           attack.children().css('display', 'none')
           user.life = "died"
        }
        else if(user.life > 0){
            
        user.life -= enemy.attack
        user.gold -= 5
        attack.children().css('display', 'none')
        attack.children().removeClass('attack-move')
        setTimeout(() => {
            attack.children().css('display', 'block')
            attack.children().addClass('attack-move')
            
        }, 100);
        if(user.life == 0 || (user.life - enemy.attack)<0 ){
            $('#end').html("You died").hide(1000).show(5000).fadeOut(5000).css("color","red")
            attack.children().removeClass('attack-move')
            attack.children().css('display', 'none')
            user.life = "died"
         }
        
       }
       
    }
}
//Info-players
setInterval(() => {
    if(user.life > 0){

        user.gold += 2
    }
}, 1000);
setInterval(()=>{
    $('#coin').html(user.gold) 
    $('#life-player').html(user.life)
    $('#life-enemy').html(enemy.life)
}, 60)
    
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
   if(user.gold >= 40){
    user.gold -= 40
    $('#life-player').html(user.life += 40);
    attack.children().addClass('attack-move')
    attack.children().css('display', 'block')
   }
})
$('#regenerate').click(()=>{  
    if(user.gold >= 60){
        user.gold -= 60
    $('#life-player').html(user.life = 100);
    attack.children().addClass('attack-move')
    attack.children().css('display', 'block')
    }
})
$('#attackShop').click(()=>{ 
    if(user.gold -= 40){ 
    user.attack += 15
    }
})

 
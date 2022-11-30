import { player} from '/components/game/game.js'

$('#player-game').prepend(player.image);
$('#battle').click(()=>{
    console.log(player.image)
})
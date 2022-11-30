
import {character1, character2, character3} from '/components/factory.js'

const characters = [character1, character2, character3]

export let player = character1


    $('#next-character').click(()=>{
        if(characters[0].info.css("display") == "block"){
            player = character2
            characters[0].info.css("display", "none")
            characters[1].info.css("display", "block")
        }
        else if(characters[1].info.css("display") == "block"){
            player = character3
            characters[1].info.css("display", "none")
            characters[2].info.css("display", "block")
        }
        else {
            player = character1
            characters[2].info.css("display", "none")
            characters[0].info.css("display", "block")
        }
        
    })

$('#next').click(()=>{

    $('#screen').children().remove()
    $.get("components/playing/playing.html", function(res){
        $('#screen').html(res) 
    })
})





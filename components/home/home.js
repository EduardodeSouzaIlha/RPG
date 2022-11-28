$('span:last').click(()=>{
    console.log("The best game for you")
   
    $.get("components/home/about.html", function(res){
        $('#container').html(res).css("display","flex").css("flex-direction","column");
    })
})
$('span:first').click(()=>{
       $('#menu').remove()
       $.get("components/game/game.html", function(res){
        $('#game').html(res) 
        })
})
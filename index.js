$.get("components/home/home.html", function(res){
    $('#menu').html(res);
    home()  
    
})

let URL = document.createElement('base')
URL.href= document.location.href       
document.head.appendChild(URL)

function home(){
    $('span:last').click(()=>{
        console.log("The best game for you", $("script"))
       
        $.get("components/home/about.html", function(res){
            $('#container').html(res).css("display","flex").css("flex-direction","column");
        })
    
    })
    $('span:first').click(()=>{
           $('#menu').children().remove()
           $.get("components/game/game.html", function(res){
            $('#game').html(res)
            $('body').append() 
            })
    })
}






$('span:last').click(()=>{
    console.log("The best game for you")
   
    $.get("ajax.html", function(res){
        $('#container').html(res).css("display","flex").css("flex-direction","column");
    })
})

